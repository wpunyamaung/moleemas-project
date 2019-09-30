import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './App.css';
import './index.css'

function Form1() {
  // let state = {
  //   shift: '',
  //   date: '',
  //   production: '',
  //   no: '',
  //   checkerName: '',
  //   mainEquipment: '',
  //   numberOfTrip: ''
  // }
    const [aMain, setAmain] = useState();
    const [shift, setShift] = useState('');
    const [date, setDate] = useState('');
    const [production, setProduction] = useState('');
    const [no, setNo] = useState(0);

  var onSubmit = function(){
    alert('test')
    fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })
  }

  let onDisableTrip = () => {
    let equipType = $('#txtMainEquip')[0].value;
    console.log(equipType)
    $("#txtNumberOfTrip").prop('disabled', (equipType !== 'semi'));
  }

  let onChangeProduction = () => {
    let equipType = $('#txtMainEquip')[0].value;
    let numberOfTrip = parseInt($('#txtNumberOfTrip')[0].value)
    console.log(equipType)
    console.log(numberOfTrip)
    $("#txtProduction").val((numberOfTrip * 40), (numberOfTrip !== ''));
  }

  let handleChange = (date) => {
    setDate(date)
  }

  return (
    <div className="App">

      <p class="title">Model B: งานขุดและขนดินโดยใช้เครื่องจักรช่วยและจัดจ้างผู้รับเหมา</p>

      <form>
      <div class="row">
        <div class="col-2 text-right">
          <label htmlFor="txtShift" class="col-form-label">Shift</label>
        </div>
        <div class="col-4">
          <select id="txtShift" class="form-control">
            <option value='' selected>Choose...</option>
            <option value='day'>Day</option>
            <option value='night'>Night</option>
          </select>
        </div>
        <div class="col-2 text-right">
          <label htmlFor="txtDate" class="col-form-label">Date</label>
        </div>
        <div class="col-4 text-left">
          <DatePicker className="form-control col-12" selected={ date } onChange={ handleChange } />
        </div>
      </div>

        <div class="row" >
          <div class="col-2 text-right">
            <label htmlFor="txtProduct" class="col-form-label">Product</label>
          </div>
          <div class="col-4">
            <select id="txtProduct" class="form-control">
              <option value='' selected>Choose...</option>
              <option value='soil'>Soil</option>
            </select>
          </div>
          <div class="col-2 text-right">
            <label htmlFor="txtCheckName" class="col-form-label">Checker Name</label>
          </div>
          <div class="col-4">
            <input type="text" class="form-control" id="txtCheckName" placeholder=""/>
          </div>
        </div>

        <div class="row" >
          <div class="col-2 text-right">
            <label htmlFor="txtMainEquip" class="col-form-label">Main Equipment</label>
          </div>
          <div class="col-4">
            <select id="txtMainEquip" class="form-control" onChange={ onDisableTrip }>
              <option value=''>Choose...</option>
              <option value='semi'>Semi Mobile Crusher</option>
              <option value='bucket'>Bucket Wheel Excavator</option>
            </select>
          </div>
          <div class="col-2 text-right">
            <label htmlFor="txtNo" class="col-form-label">No.</label>
          </div>
          <div class="col-4">
            <select id="txtNo" class="form-control">
              <option value='' selected>Choose...</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
        </div>

        <div class="row" >
          <div class="col-2 text-right">
            <label htmlFor="txtNumberOfTrip" class="col-form-label">Number Of Trip</label>
          </div>
          <div class="col-4">
          <input type="text" class="form-control text-right" id="txtNumberOfTrip" placeholder="" onChange= { onChangeProduction }/>
          </div>
          <div class="col-2 text-right">
          </div>
          <div class="col-4">
          </div>
        </div>

        <div class="row" >
          <div class="col-2 text-right">
            <label htmlFor="txtProduction" class="col-form-label">Production</label>
          </div>
          <div class="col-4">
          <input type="text" class="form-control text-right" id="txtProduction" placeholder=""/>
          </div>
          <div class="col-2 text-left">
            <label for="bcmInput" class="col-form-label">BCM</label>
          </div>
          <div class="col-4">
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form1;


/**
 * NOTE:
 * https://itnext.io/add-state-and-lifecycle-methods-to-function-components-with-react-hooks-8e2bdc44d43d
 */