import React from "react";

class InputFormStock extends React.Component {
    constructor(props) {
        super(props);
        this.refs = React.createRef();
        this.state = { message: '', getData: '', loading: true };
    }

    onCreateEmployee = () => {
        let PostApiData = {
            Id: this.refs.Id.value,
            Name: this.refs.Name.value,
            Location: this.refs.Location.value,
            Salary: this.refs.Salary.value

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
            body: JSON.stringify(PostApiData),
            redirect: 'follow'
        };

        fetch("https://localhost:44424/postapi/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    async getTestData() {
        const response = await fetch('postapi');
        console.log("response: " + response);
        this.setState({ getData: 'Test getdata result: ' + response.message });
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
                                {/* <button onClick={this.onCreateEmployee}>Create</button> */}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>message: {this.state.message}</p>
                                <p>getData: {this.state.getData}</p>
                            </td>
                        </tr>
                    </table>
                </form>
                <button onClick={this.onCreateEmployee}>Create</button>

                {/* <button onClick={this.getTestData()}>Test Postapi</button> */}

            </div>
        );
    }

}


export default InputFormStock;