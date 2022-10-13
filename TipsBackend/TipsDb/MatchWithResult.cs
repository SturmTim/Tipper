namespace TipsDb;

public partial class MatchWithResult
{
  public MatchWithResult() => MatchTips = new HashSet<MatchTip>();

  public long Id { get; set; }
  public DateOnly DateOfMatch { get; set; }
  public string? Groupname { get; set; }
  public long Seq { get; set; }
  public long? Shot { get; set; }
  public long? Received { get; set; }
  public long Team1Id { get; set; }
  public long Team2Id { get; set; }

  public Team Team1 { get; set; } = null!;
  public Team Team2 { get; set; } = null!;
  public ICollection<MatchTip> MatchTips { get; set; }
}
