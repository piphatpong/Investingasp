import React from "react";
import { useState } from "react";


function InputFormStock() {
    const [formData, setFormData] = useState({
        Id: "",
        Name: "",
        Volume: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        // <div className="container m-10 mx-auto p-3" style={{ background: '#cce' }}>
        <div className="container m-10 mx-auto p-3">
            <form onSubmit={handleSubmit}>
                <table class="table table-striped m-10">
                    <tr>
                        <td>
                            <h3>กรอบข้อมูล InputFormStock</h3>
                            <p>
                                <label>Employee ID : <input type="text" value={formData.Id} ></input></label>
                            </p>
                            <p>
                                <label>Employee Name : <input type="text" value={formData.Name} onChange={handleChange}></input></label>
                            </p>
                            <p>
                                <label>Employee Location : <input type="text" value={formData.Volume} onChange={handleChange}></input></label>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="Submit" />
                        </td>
                    </tr>
                </table>
            </form>

        </div>
    );
}


export default InputFormStock;