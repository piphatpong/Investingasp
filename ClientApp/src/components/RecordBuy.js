import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import RecBuyEquity from './RecBuyEquity';

export class RecordBuy extends Component {
  static displayName = RecordBuy.name;

  render() {
    return (
      <div>
        <div>
          <h3>Record Buy</h3>
        </div>
        <div>
          <select>
            <option value="as001">ซื้อตราสารหนี้</option>
            <option value="as002">ซื้อหุ้นทุน</option>
            <option value="as003">ซื้อหน่วยลงทุน</option>
            <option value="as004">ซื้อตราสารอนุพันธ์</option>
            <option value="as005">เงินฝากสถาบันการเงิน</option>
          </select>

        </div>
        <hr />
        <div><RecBuyEquity /></div>
      </div>

    );
  }
}
