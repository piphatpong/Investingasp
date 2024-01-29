import React from "react";
// import { useState } from "react";


class InputFormStock extends React.Component {
    constructor(props) {
        super(props);
        this.refs = React.createRef();
        this.state = {message:''};
    }

    onCreateEmployee = () => {
        let PostApiData = {
            Id: this.refs.Id.value,
            Name: this.refs.Name.value,
            Location: this.refs.Location.value,
            Salary: this.refs.Salary.value

        };

        fetch('https://localhost:44424/postapi', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: PostApiData
        }).then(r => r.json()).then(res => {
            if (res) {
                this.setState({ message: 'New Employee is Created Successfully' });
            }
        });
    }

    render() {
        return (
            // <div className="container m-10 mx-auto p-3" style={{ background: '#cce' }}>
            <div className="container m-10 mx-auto p-3">
                <form action="#">
                    <table class="table table-striped m-10">
                        <tr>
                            <td>
                                <h3>กรอบข้อมูล InputFormStock</h3>
                                <p>
                                    <label>Employee ID : <input type="text" ref="Id" ></input></label>
                                </p>
                                <p>
                                    <label>Employee Name : <input type="text" ref="Name" ></input></label>
                                </p>
                                <p>
                                    <label>Employee Location : <input type="text" ref="Location"></input></label>
                                </p>
                                <p>
                                    <label>Employee Salary : <input type="text" ref="Salary"></input></label>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={this.onCreateEmployee}>Create</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>{this.state.message}</p>
                            </td>
                        </tr>
                    </table>
                </form>

            </div>
        );
    }

}


export default InputFormStock;