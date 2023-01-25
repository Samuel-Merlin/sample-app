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
import * as React from 'react';

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

export default function FormForm() {
  return (
    <div class="form-container">
      <form class="register-form">
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          id="DOB"
          class="form-field"
          type="text"
          placeholder="Date of Birth"
          name="DoB"
        />
      </form>
    <Select/>
    </div>  
  );
}