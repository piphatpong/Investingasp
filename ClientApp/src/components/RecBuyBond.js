//import { Form, Button, Container } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
// import React, { useState } from "react";
import React from "react";
import CreditRating from "./CraditRating";



// ซื้อตราสารหนี้
function RecBuyBond() {

  // const [isOpen, setIsOpen] = useState(true);

  const currentDate = new Date();
  const nowDate = currentDate.getDate();
  const nowMonth = currentDate.getMonth() + 1; // Note: Jan = 0, Feb = 1
  const nowYear = currentDate.getFullYear();
  const TodayDate = nowDate + "/" + nowMonth + "/" + nowYear;

  return (
    // <div className="container m-10 mx-auto p-3" style={{ background: '#cce' }}>
    <div className="container m-10 mx-auto p-3">
      <form>
        <table class="table table-striped m-10">
          <tr>
            <td>
              <label class="form-label">วันที่บันทึก
                <input type="text" class="form-control form-control-sm" id="TodayDate" value={TodayDate} />
              </label>
            </td>

          </tr>
          <tr>
            <td>
              <div class="d-flex justify-content-between flex-wrap mb-3">
                <div class="p-2 bd-highlight">
                  <label class="form-label">ชื่อหลักทรัพย์
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
                  <label class="form-label">กลุ่มอุตสาหกรรม
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <div><CreditRating /></div>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">วันออกตราสาร/วันเริ่มต้น
                    <input type="date" class="form-control" name="startdate" required pattern="\d{1,2}/\d{1,2}/\d{4}" />
                    {/* <span class="validity"></span> */}
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">วันที่ครบกำหนด
                    <input type="date" class="form-control" name="startdate" required pattern="\d{1,2}/\d{1,2}/\d{4}" />
                    {/* <span class="validity"></span> */}
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">อายุตราสาร / ระยะเวลา
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">อัตราดอกเบี้ยหน้าตั๋ว (%)
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">อัตราผลตอบแทน Yield(%)
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">จำนวนหน่วย
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>
                <div class="p-2 bd-highlight">
                  <label class="form-label">จำนวนเงินราคาซื้อ
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>

                <div class="p-2 bd-highlight">
                  <label class="form-label">จำนวนเงินราคาตรา (มูลค่าตราสาร)
                    <input type="text" class="form-control form-control-sm mt-0" placeholder="" />
                  </label>
                </div>

                <div class="p-2 bd-highlight">
                  <label class="form-label">จำนวนเงินราคาตรา (มูลค่าตราสาร)
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

export default RecBuyBond;