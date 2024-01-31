using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;

namespace recExtPolAge.Controllers;

[ApiController]
[Route("[controller]")]
public class BuyRecStockController : ControllerBase
{
    const string connectionString = "Data Source=BL-IT-01\\SQLEXPRESS;Initial Catalog=Investing;User ID=Invest;Password=1234; Encrypt=True;TrustServerCertificate=True";

    [HttpGet]
    public string Get()
    {
        return ("Get API Test : Success !!!");
    }

    [HttpPost]
    public bool Post(BuyRecStockModel postapidata)
    {
        string query = @"insert into StockInfo values(@ord_no,@port,@stockname,@shortstockname,@issuername,@stockaccount
        ,@stocktype,@stockvolume,@unitprice,@total,@commvat,@regdepositstatus,@receivemethod,@holdtype)";

        using (SqlConnection connect = new(connectionString))
        {
            SqlCommand cmd = new SqlCommand(query, connect);
            cmd.Parameters.Add(new SqlParameter("@ord_no", postapidata.ord_no));
            cmd.Parameters.Add(new SqlParameter("@port", postapidata.port));
            cmd.Parameters.Add(new SqlParameter("@stockname", postapidata.stockname));
            cmd.Parameters.Add(new SqlParameter("@issuername", postapidata.issuername));
            cmd.Parameters.Add(new SqlParameter("@stockaccount", postapidata.stockaccount));
            cmd.Parameters.Add(new SqlParameter("@stocktype", postapidata.stocktype));
            cmd.Parameters.Add(new SqlParameter("@stockvolume", postapidata.stockvolume));
            cmd.Parameters.Add(new SqlParameter("@unitprice", postapidata.unitprice));
            cmd.Parameters.Add(new SqlParameter("@total", postapidata.total));
            cmd.Parameters.Add(new SqlParameter("@commvat", postapidata.commvat));
            cmd.Parameters.Add(new SqlParameter("@regdepositstatus", postapidata.regdepositstatus));
            cmd.Parameters.Add(new SqlParameter("@receivemethod", postapidata.receivemethod));
            cmd.Parameters.Add(new SqlParameter("@holdtype", postapidata.holdtype));

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

