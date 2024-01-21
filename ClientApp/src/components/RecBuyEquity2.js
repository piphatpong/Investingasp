//import { Form, Button, Container } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
// import React, { useState } from "react";
import React from "react";


// function switchToggle() {
//   setIsOpen((isOpen) => !isOpen);
// }

function RecBuyEquity2() {

  // const [isOpen, setIsOpen] = useState(true);

  const currentDate = new Date();
  const nowDate = currentDate.getDate();
  const nowMonth = currentDate.getMonth() + 1; // Note: Jan = 0, Feb = 1
  const nowYear = currentDate.getFullYear();
  const TodayDate = nowDate+"/"+nowMonth+"/"+nowYear;

  return (
    <div className="container m-10 mx-auto p-3" style={{ background: '#cce' }}>

      <form>
        <table class="table table-striped m-10">
          <tr>
            <td>
              <label class="form-label">วันที่
                <input type="text" class="form-control form-control-sm" id="TodayDate" value={TodayDate}/>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex flex-wrap align-content-start mb-3">
                <div class="p-2 bd-highlight">
                  <label class="form-label">ชื่อย่อ
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">ชื่อหลักทรัพย์
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">Cradit Rating
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">จำนวนเงิน/บาท
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">อัตราดอกเบี้ย
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">ระยะเวลา
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">วันที่เริ่ม
                    <input type="date" class="form-control" name="startdate" required pattern="\d{1,2}/\d{1,2}/\d{4}" />
                    {/* <span class="validity"></span> */}
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">วันที่สิ้นสุด
                    <input type="date" class="form-control" name="enddate" required pattern="\d{1,2}/\d{1,2}/\d{4}" />
                    {/* <span class="validity"></span> */}
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

        </table>
      </form>

    </div>

  )
}

export default RecBuyEquity2;