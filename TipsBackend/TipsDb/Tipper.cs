namespace TipsDb;

public partial class Tipper
{
  public Tipper() => MatchTips = new HashSet<MatchTip>();

  public long Id { get; set; }
  public string Name { get; set; } = null!;
  public long Points { get; set; }
  public long NrTipsExact { get; set; }
  public long NrTips12X { get; set; }
  public string? TippingGroups { get; set; }

  public virtual ICollection<MatchTip> MatchTips { get; set; }
}
