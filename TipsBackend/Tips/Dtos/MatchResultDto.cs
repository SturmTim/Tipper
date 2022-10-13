namespace Tips.Dtos;

public class MatchResultDto
{
  [Required] public int Shot { get; set; }
  [Required] public int Received { get; set; }
}
