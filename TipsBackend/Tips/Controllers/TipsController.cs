namespace Tips.Controllers;

[Route("[controller]/[action]")]
[ApiController]
public class TipsController : ControllerBase
{
  private readonly TipsService _tipsService;
  public TipsController(TipsService tipsService) => _tipsService = tipsService;

  [HttpGet]
  public List<TipperDto> TipperNames()
  {
    this.Log();
    return _tipsService.TipperNames();
  }

  [HttpGet]
  public List<MatchDto> MatchResults()
  {
    this.Log();
    return _tipsService.MatchResults();
  }

  [HttpGet("{tipperId}")]
  public TipDto Tips(int tipperId)
  {
    this.Log($"for tipper {tipperId}");
    return _tipsService.Tipps(tipperId);
  }

}
