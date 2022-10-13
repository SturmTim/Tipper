namespace TipsDb;

public partial class Team
{
  public Team()
  {
    MatchWithResultTeam1s = new HashSet<MatchWithResult>();
    MatchWithResultTeam2s = new HashSet<MatchWithResult>();
  }

  public long Id { get; set; }
  public string Name { get; set; } = null!;

  public ICollection<MatchWithResult> MatchWithResultTeam1s { get; set; }
  public ICollection<MatchWithResult> MatchWithResultTeam2s { get; set; }
}
