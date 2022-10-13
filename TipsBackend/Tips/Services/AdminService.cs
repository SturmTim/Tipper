namespace Tips.Services;

public class AdminService
{
  private readonly TipsContext _db;

  public AdminService(TipsContext db) => _db = db;

  public MatchDto UpdateMatchResult(long id, MatchResultDto matchDto)
  {
    var match = _db.MatchWithResults.Single(x => x.Id == id);
    if (match.Shot != null && match.Received != null)
    {
      throw new InvalidOperationException($"Match #{id} already played {matchDto.Shot}:{matchDto.Received}");
    }
    match.Shot = matchDto.Shot;
    match.Received = matchDto.Received;
    _db.SaveChanges();
    //TODO: calculate Points, TipsExact and Tips12x for every Tipper
    return new MatchDto().CopyPropertiesFrom(match);
  }
}
