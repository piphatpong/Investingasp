import React from "react";

function CreditRating() {


    return (<div>
        <label class="form-label">Cradit Rating
            <select class="form-control form-control-sm mt-0">
                <option value=''>เลือก</option>
                <option value="AAA+">AAA+</option>
                <option value="AA+">AA+</option>
                <option value="AA-">AA-</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="BBB+">BBB+</option>
                <option value="BBB">BBB</option>
                <option value="BBB-">BBB-</option>
                <option value="BB+">BB+</option>
                <option value="BB">BB</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="CCC+">CCC+</option>
                <option value="CCC">CCC</option>
                <option value="CCC-">CCC-</option>
                <option value="CC">CC</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        </label>
    </div>)
}

export default CreditRating;