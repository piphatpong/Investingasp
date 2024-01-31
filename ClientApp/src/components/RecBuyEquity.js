//import { Form, Button, Container } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
// import React, { useState } from "react";
import React from "react";
import CreditRating from "./CraditRating";

// ซื้อหุ้นทุน

class RecBuyEquity extends React.Component {
  constructor(props) {
    super(props);
    this.refs = React.createRef();
    this.state = { message: '', getData: '', loading: true };
  }

  onCreateRecord = () => {
    let BuyRecStock = {
      ord_no: this.refs.Id.value,
      port: this.refs.port.value,
      stockname: this.refs.stockname.value,
      issuername: this.refs.issuername.value,
      stockaccount: this.refs.stockaccount.value,
      stocktype: this.refs.stocktype.value,
      stockvolume: this.refs.stockvolume.value,
      unitprice: this.refs.unitprice.value,
      total: this.refs.total.value,
      commvat: this.refs.commvat.value,
      regdepositstatus: this.refs.regdepositstatus.value,
      receivemethod: this.refs.receivemethod.value,
      holdtype: this.refs.holdtype.value,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // var raw = JSON.stringify({
    //     "Id": "2222",
    //     "Name": "aaabbbccc",
    //     "Location": "Locateeee",
    //     "Salary": "10000"
    // });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(BuyRecStock),
      redirect: 'follow'
    };

    fetch("https://localhost:44424/buyrecstock/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  render() {

    const currentDate = new Date();
    const nowDate = currentDate.getDate();
    const nowMonth = currentDate.getMonth() + 1; // Note: Jan = 0, Feb = 1
    const nowYear = currentDate.getFullYear();
    const TodayDate = nowDate + "/" + nowMonth + "/" + nowYear;



    return (
      <div className="container m-10 mx-auto p-3">

        <form>
          <table class="table table-striped m-10">
            <tr><td>
              <h2>ซื้อหุ้นทุน</h2>
            </td>
            </tr>
            <tr>
              <td>
                <label class="form-label">วันที่
                  <input type="text" class="form-control form-control-sm" ref="ord_no" value={TodayDate} />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex flex-wrap  align-content-around mb-3">
                  <div class="p-2 bd-highlight">
                    <label class="form-label">Port
                      <input type="text" class="form-control form-control-sm mt-0" ref="port" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">ชื่อหุ้นทุน
                      <input type="text" class="form-control form-control-sm mt-0" ref="stockname" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">ชื่อย่อ
                      <input type="text" class="form-control form-control-sm mt-0" ref="shortstockname" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">ผู้ออกหลักทรัพย์
                      <input type="text" class="form-control form-control-sm mt-0" ref="issuername" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">เลขที่หลักทรัพย์
                      <input type="text" class="form-control form-control-sm mt-0" ref="stockaccount" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">ประเภทหุ้นทุน
                      <input type="text" class="form-control form-control-sm mt-0" ref="stocktype" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">จำนวนหุ้น
                      <input type="text" class="form-control form-control-sm mt-0" ref="stockvolume" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">ราคา/หน่วย
                      <input type="text" class="form-control form-control-sm mt-0" ref="unitprice" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">มูลค่าซื้อรวม
                      <input type="text" class="form-control form-control-sm mt-0" ref="total" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">COM+VAT
                      <input type="text" class="form-control form-control-sm mt-0" ref="commvat" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">สถานะการวางไว้กับนายทะเบียน
                      <input type="text" class="form-control form-control-sm mt-0" ref="regdepositstatus" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">วิธีการรับเงิน (Book ธ./เช็ค)
                      <input type="text" class="form-control form-control-sm mt-0" ref="receivemethod" placeholder="" />
                    </label>
                  </div>
                  <div class="p-2 bd-highlight">
                    <label class="form-label">รูปแบบการถือครอง
                      <input type="text" class="form-control form-control-sm mt-0" ref="holdtype" placeholder="" />
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr align="center">
              <td>
                <div align="center">
                  <button className="btn btn-primary" onClick={this.onCreateRecord}>บันทึก</button>
                  &nbsp; &nbsp;
                  <button className="btn btn-primary" onclick="">ยกเลิก</button>
                </div>
              </td>
            </tr>
          </table>
        </form>

      </div>

    )
  }
}

export default RecBuyEquity;