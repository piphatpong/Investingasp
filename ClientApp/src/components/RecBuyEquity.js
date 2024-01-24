//import { Form, Button, Container } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
// import React, { useState } from "react";
import React from "react";
import CreditRating from "./CraditRating";

// ซื้อหุ้นทุน

function RecBuyEquity() {

  // const [isOpen, setIsOpen] = useState(true);

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
                <input type="text" class="form-control form-control-sm" id="TodayDate" value={TodayDate} />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex flex-wrap  align-content-around mb-3">
                <div class="p-2 bd-highlight">
                  <label class="form-label">Port
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">ชื่อหุ้นทุน
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">ชื่อย่อ
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">ผู้ออกหลักทรัพย์
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">เลขที่หลักทรัพย์
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">ประเภทหุ้นทุน
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">จำนวนหุ้น
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">ราคา/หน่วย
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">มูลค่าซื้อรวม
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">COM+VAT
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">สถานะการวางไว้กับนายทะเบียน
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">วิธีการรับเงิน (Book ธ./เช็ค)
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">รูปแบบการถือครอง
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr align="center">
            <td>
              <div align="center">
                <button className="btn btn-primary" onclick="">บันทึก</button>
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

export default RecBuyEquity;