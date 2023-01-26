/*+===================================================================
Samuel Merlin RWS 
File:      Form.js (Project: Learn React tutorial, part 2)

  Summary:   Set up the app so that when you click on one of the cells, it takes you to a different page that has a form on it. This form asks for a name, date of birth, 
  and for a selection from one of the three options
  Red
  Blue
  Green

  Functions: Select,  Form.
===================================================================+*/
import React, { useState } from 'react';
import TableDatePicker from "./DateT";

function Select() {
  return (
    <div>
      <select id="colours">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}

function ValidateForm(props) {
    const [validationMessages, setValidationMessages] = useState([]);
    const [formData, setFormData] = useState({});
    const handleChange = ({ target }) => {
     setFormData({ ...formData, [target.name]: target.value });
    }
    const handleClick = (evt) => {
        validateForm();
        if (validationMessages.length > 0) {
            evt.preventDefault();
        }
        console.log({"Name" : formData.fullName})
    }
    const validateForm = () => {
        const { fullName} = formData;
        setValidationMessages([]);
        let messages = [];
        if (!fullName) {
            messages.push("Name is required");
        }
        else if (fullName) {
          messages.push("Thank you for submitting the form");
        }
        setValidationMessages(messages);
    }
    return (
        <div >
            <form>
                <label>Name</label>
                <input value={formData.fullName || ''} onChange={handleChange} type="text" name="fullName" />
                <div>
                  <h4>Select a Color</h4>
	                <Select/>
                  <br></br>
                </div>
                <div>
                  <h4>Select a Date</h4>
                  <TableDatePicker/>
                  <br></br>
                </div>
                <button type="button" onClick={handleClick}>Submit</button>
            </form>
            <br></br>
            <div>{validationMessages.length > 0 && <span>Validation Summary</span>}
                <ul>
                    {validationMessages.map(vm => <li key={vm}>{vm}</li>)}
                </ul>
            </div>
        </div>);
}

export default ValidateForm;