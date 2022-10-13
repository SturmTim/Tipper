namespace Tips.Dtos;

public class SingleTipDto
{
  [Required] public long MatchWithResultId { get; set; }
  [Required] public long Seq { get; set; }
  [Required] public long Shot { get; set; }
  [Required] public long Received { get; set; }
  public long? TipExact { get; set; }
  public long? Tip12X { get; set; }
}
