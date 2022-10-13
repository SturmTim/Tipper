using System.Text.Json.Serialization;

namespace Tips.Dtos;

public class MatchDto
{
  [Required] public long Id { get; set; }
  [JsonIgnore] public DateOnly DateOfMatch { private get; set; }
  [Required] public string DateString => $"{DateOfMatch:dd.MM.yyyy}";
  [Required] public string Groupname { get; set; } = null!;
  [Required] public long Seq { get; set; }
  [Required] public long? Shot { get; set; }
  [Required] public long? Received { get; set; }
  [Required] public long Team1Id { get; set; }
  [Required] public long Team2Id { get; set; }
  [Required] public string Team1Name { get; set; } = null!;
  [Required] public string Team2Name { get; set; } = null!;
}
