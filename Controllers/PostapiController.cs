using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;

namespace recExtPolAge.Controllers;

[ApiController]
[Route("[controller]")]
public class PostapiController : ControllerBase
{
    const string connectionString = "Data Source=BL-IT-01\\SQLEXPRESS;Initial Catalog=Investing;User ID=Invest;Password=1234; Encrypt=True;TrustServerCertificate=True";

    [HttpGet]
    public string Get()
    {
        return ("Post API Test : Success !!!");
    }

    [HttpPost]
    public bool Post(PostApi postapidata)
    {
        string query = "insert into StockInfo values(@Id,@Name,@Loc,@Sal)";

        using (SqlConnection connect = new(connectionString))
        {
            SqlCommand cmd = new SqlCommand(query, connect);
            cmd.Parameters.Add(new SqlParameter("@Id", postapidata.Id));
            cmd.Parameters.Add(new SqlParameter("@Name", postapidata.Name));
            cmd.Parameters.Add(new SqlParameter("@Loc", postapidata.Location));
            cmd.Parameters.Add(new SqlParameter("@Sal", postapidata.Salary));
            connect.Open();
            int noOfRowsAffected = cmd.ExecuteNonQuery();
            connect.Close();

            return noOfRowsAffected > 0 ? true : false;
        }
    }

    [HttpPut("{Id}")]
    public bool Edit(int Id, PostApi DataUpdate)
    {
        string query = "Update StockInfo set name=@Name Where id=@Id ";

        using (SqlConnection connect = new(connectionString))
        {
            SqlCommand cmd = new SqlCommand(query, connect);
            cmd.Parameters.Add(new SqlParameter("@Id", Id));
            cmd.Parameters.Add(new SqlParameter("@Name", DataUpdate.Name));
            // cmd.Parameters.Add(new SqlParameter("@Loc", postapidata.Location));
            // cmd.Parameters.Add(new SqlParameter("@Sal", postapidata.Salary));
            connect.Open();
            int noOfRowsAffected = cmd.ExecuteNonQuery();
            connect.Close();
            return noOfRowsAffected > 0 ? true : false;
        }
    }

    [HttpDelete("{Id}")]
    public bool Delete(int Id)
    {
        string query = "Delete From StockInfo Where id=@Id ";

        using (SqlConnection connect = new(connectionString))
        {
            SqlCommand cmd = new SqlCommand(query, connect);
            cmd.Parameters.Add(new SqlParameter("@Id", Id));
            connect.Open();
            int noOfRowsAffected = cmd.ExecuteNonQuery();
            connect.Close();
            return noOfRowsAffected > 0 ? true : false;
        }
    }
}

