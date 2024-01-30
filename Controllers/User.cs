using System.Text.Json.Nodes;
using Microsoft.AspNetCore.Mvc;

namespace recExtPolAge.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    [HttpGet]
    public string Get()
    {
        return("jsonstr");
    }
    [HttpGet("{id}")]
    public String Get(int id)
    {
        return ("Hello" + id);
    }
}