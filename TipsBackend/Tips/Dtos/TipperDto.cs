namespace Tips.Dtos;

public class TipperDto
{
  [Required] public long Id { get; set; }
  [Required] public string Name { get; set; } = null!;
  [Required] public string TippingGroups { get; set; } = null!;
}
