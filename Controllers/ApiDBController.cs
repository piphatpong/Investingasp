using Microsoft.AspNetCore.Mvc;

namespace recExtPolAge.Controllers;

[ApiController]
[Route("[controller]")]
public class ApiDBController : Controller{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<ApiDBController> _logger;

    public ApiDBController(ILogger<ApiDBController> logger)
    {
        _logger = logger;
    }

    [HttpGet("{fetch}")]
    public IEnumerable<ApiDB> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new ApiDB
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
