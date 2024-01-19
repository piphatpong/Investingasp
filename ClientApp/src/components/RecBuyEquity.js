//import { Form, Button, Container } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';

function RecBuyEquity() {
  return (
    <div className="container m-10 mx-auto p-3" style={{ background: '#cee' }}>
      <form>
        <table class="table table-striped m-10">
          <tr>
            <td>
              <label class="form-label">วันที่
                <input type="text" class="form-control form-control-sm" placeholder="" />
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
                  <label for="bday">Enter your birthday:</label>
                  <input type="date" name="bday" required pattern="dd/mm/yyyy" />
                  <span class="validity"></span>
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

export default RecBuyEquity;