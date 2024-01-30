using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;

namespace recExtPolAge.Controllers;

[ApiController]
[Route("[controller]")]
public class PostapiController : ControllerBase
{ 
    [HttpGet]
    public string Get(){
        return("Post API Test : Success !!!");
    }

    [HttpPost]
    public string Post(PostApi postapidata){
        //const string connectionString = @"server=BL-IT-01\SQLEXPRESS;database=Investing; UserId=Invest; Password=1234;";
        const string connectionString = "Data Source=BL-IT-01\\SQLEXPRESS;Initial Catalog=Investing;User ID=Invest;Password=1234; Encrypt=True;";
        
        string query = "insert into StockInfo values(@Id,@Name,@Loc,@Sal)";
        // Provide the query string with a parameter placeholder.
       
        // Create and open the connection in a using block. This
        // ensures that all resources will be closed and disposed
        // when the code exits.
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
            // return noOfRowsAffected > 0 ? true : false;
            return postapidata.Id;
        }        
    }
}

