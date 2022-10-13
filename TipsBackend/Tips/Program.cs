//----------------------------------------
// .Net Core WebApi project create script 
//           v6.2.3 from 2022-09-24
//   (C)Robert Grueneis/HTL Grieskirchen 
//----------------------------------------

using GrueneisR.RestClientGenerator;

using Microsoft.OpenApi.Models;

string corsKey = "_myCorsKey";
string swaggerVersion = "v1";
string swaggerTitle = "TipsBackend";
string restClientFolder = Environment.CurrentDirectory;
string restClientFilename = "_requests.http";

var builder = WebApplication.CreateBuilder(args);

#region -------------------------------------------- ConfigureServices
builder.Services.AddControllers();
builder.Services
  .AddEndpointsApiExplorer()
  .AddSwaggerGen(x => x.SwaggerDoc(
    swaggerVersion,
    new OpenApiInfo { Title = swaggerTitle, Version = swaggerVersion }
  ))
  .AddCors(options => options.AddPolicy(
    corsKey,
    x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
  ))
  .AddRestClientGenerator(options => options
    .SetFolder(restClientFolder)
    .SetFilename(restClientFilename)
    .SetAction($"swagger/{swaggerVersion}/swagger.json")
  //.EnableLogging()
  );

string connectionString = builder.Configuration.GetConnectionString("Tips");
string location = System.Reflection.Assembly.GetEntryAssembly()!.Location;
string dataDirectory = Path.GetDirectoryName(location)!;
connectionString = connectionString.Replace("|DataDirectory|", dataDirectory + Path.DirectorySeparatorChar);
Console.WriteLine($"******** ConnectionString: {connectionString}");
builder.Services.AddDbContext<TipsContext>(options => options.UseSqlite(connectionString));

builder.Services.AddScoped<TipsService>()
                .AddHostedService<DbPopulationService>()
                .AddScoped<AdminService>();
#endregion

var app = builder.Build();

#region -------------------------------------------- Middleware pipeline
if (app.Environment.IsDevelopment())
{
  app.UseDeveloperExceptionPage();
  Console.WriteLine("******** Swagger enabled: http://localhost:5000/swagger (to set as default route: see launchsettings.json)");
  app.UseSwagger();
  Console.WriteLine($@"******** RestClient generating (after first request) to {restClientFolder}\{restClientFilename}");
  app.UseRestClientGenerator(); //Note: must be used after UseSwagger
  app.UseSwaggerUI(x => x.SwaggerEndpoint($"/swagger/{swaggerVersion}/swagger.json", swaggerTitle));
}

app.UseCors(corsKey);

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.UseExceptionHandler(config => config.Run(async context =>
{
  context.Response.StatusCode = (int)System.Net.HttpStatusCode.InternalServerError; //500
  context.Response.ContentType = System.Net.Mime.MediaTypeNames.Application.Json; //"application/json"
  var error = context.Features.Get<Microsoft.AspNetCore.Diagnostics.IExceptionHandlerFeature>();
  if (error != null)
  {
    await context.Response.WriteAsync(
      $"Exception: {error.Error?.Message} {error.Error?.InnerException?.Message}");
  }
}));

app.MapControllers();
#endregion

app.Run();
