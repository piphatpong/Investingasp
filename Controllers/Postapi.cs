using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;

namespace recExtPolAge.Controllers;

[ApiController]
[Route("[controller]")]
public class PostapiController : ControllerBase
{ 
    public bool Post(Array postdata){
        const string connectionString =
            @"server=VELA\SQLEXPRESS;database=Investing;integrated security=true";

        string query = "insert into StockInfo values(@Id,@Name,@Loc,@Sal)";
        // Provide the query string with a parameter placeholder.
       
        // Create and open the connection in a using block. This
        // ensures that all resources will be closed and disposed
        // when the code exits.
        using (SqlConnection connect = new(connectionString))
        { 
            SqlCommand cmd = new SqlCommand(query, connect);
            // cmd.Parameters.Add(new SqlParameter("@Id", postapi.Id));
            // cmd.Parameters.Add(new SqlParameter("@Name", postapi.Name));
            // cmd.Parameters.Add(new SqlParameter("@Loc", postapi.Location));
            // cmd.Parameters.Add(new SqlParameter("@Sal", postapi.Salary));
            connect.Open();
            int noOfRowsAffected = cmd.ExecuteNonQuery();
            connect.Close();
            return noOfRowsAffected > 0 ? true : false;
        }        
    }
}

