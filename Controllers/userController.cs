using Microsoft.AspNetCore.Mvc;

namespace recExtPolAge.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    [HttpGet]
    public String Get()
    {
        return ("hello");
    }
    [HttpGet("{id}")]
    public String Get(int id)
    {
        return ("Hello" + id);
    }
}