import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TabComponent from './TabComponent';



export class RecordBuy extends Component {
  static displayName = RecordBuy.name;
  
  render() {
    // const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <div>
          <h3>Record Buy</h3>
        </div>
          <div><TabComponent /></div>
      </div>

    );
  }
}
