using Microsoft.EntityFrameworkCore;

namespace TipsDb;

public partial class TipsContext : DbContext
{
  public TipsContext() { }

  public TipsContext(DbContextOptions<TipsContext> options) : base(options) { }

  public DbSet<MatchTip> MatchTips { get; set; } = null!;
  public DbSet<MatchWithResult> MatchWithResults { get; set; } = null!;
  public DbSet<Team> Teams { get; set; } = null!;
  public DbSet<Tipper> Tippers { get; set; } = null!;

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    if (!optionsBuilder.IsConfigured)
    {
      optionsBuilder.UseSqlite("data source=D:\\Temp\\TipsBackend\\TipsDb\\tips.sqlite");
    }
  }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<MatchTip>(entity =>
    {
      entity.Property(e => e.Id).ValueGeneratedOnAdd();

      entity.HasOne(d => d.MatchWithResult)
                .WithMany(p => p.MatchTips)
                .HasForeignKey(d => d.MatchWithResultId)
                .OnDelete(DeleteBehavior.ClientSetNull);

      entity.HasOne(d => d.Tipper)
                .WithMany(p => p.MatchTips)
                .HasForeignKey(d => d.TipperId)
                .OnDelete(DeleteBehavior.ClientSetNull);
    });

    modelBuilder.Entity<MatchWithResult>(entity =>
    {
      entity.Property(e => e.Id).ValueGeneratedOnAdd();

      entity.Property(e => e.DateOfMatch).HasColumnType("DATETIME");

      entity.Property(e => e.Team1Id).HasColumnName("Team1_Id");

      entity.Property(e => e.Team2Id).HasColumnName("Team2_Id");

      entity.HasOne(d => d.Team1)
                .WithMany(p => p.MatchWithResultTeam1s)
                .HasForeignKey(d => d.Team1Id);

      entity.HasOne(d => d.Team2)
                .WithMany(p => p.MatchWithResultTeam2s)
                .HasForeignKey(d => d.Team2Id);
    });

    modelBuilder.Entity<Team>(entity => entity.Property(e => e.Id).ValueGeneratedOnAdd());

    modelBuilder.Entity<Tipper>(entity => entity.Property(e => e.Id).ValueGeneratedOnAdd());

    OnModelCreatingPartial(modelBuilder);
  }

  partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
