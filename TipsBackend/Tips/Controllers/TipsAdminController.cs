namespace Tips.Controllers;

[Route("[controller]/[action]")]
[ApiController]
public class TipsAdminController : ControllerBase
{
  private readonly AdminService _adminService;
  public TipsAdminController(AdminService adminService) => _adminService = adminService;

  [HttpPut("{id}")]
  public ActionResult<MatchDto> MatchResults(int id, [FromBody] MatchResultDto matchDto)
  {
    this.Log($"PUT#{id} --> {matchDto.Shot}:{matchDto.Received}");
    try
    {
      return Ok(_adminService.UpdateMatchResult(id, matchDto));
    }
    catch (Exception exc)
    {
      return BadRequest(exc.Message);
    }
  }

}
