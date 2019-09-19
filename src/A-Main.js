import React from 'react';
import './App.css';
import './index.css'

function Form1() {

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
  return (
    <div className="App">
      <h3 class="card-header info-color white-text text-center">
        <strong>รายงานผลงานประจำวัน โครงการเหมืองขุดและขนดินเหมืองหงสา  สปป.ลาว</strong>
        <p class="h4"></p>
        <p class="h4">บริษัท อิตาเลียนไทยหงสา จำกัด</p>
      </h3>
      <p class="h4"></p>
      <p class="h4"></p>
      <p class="h4">Model A: งานขุดและขนดินโดยใช้เครื่องจักรหลัก</p>
      <p class="h4"></p>
      <form>
      <div class="row">
        <div class="col-2 text-right">
          <label for="shiftInput" class="col-form-label">Shift</label>
        </div>
        <div class="col-3">
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>Day</option>
            <option>Night</option>
          </select>
        </div>
        <div class="col-2 text-right">
          <label for="shiftInput" class="col-form-label">Date</label>
        </div>
        <div class="col-3">
          <select id="inputState" class="form-control">
            <option selected>Date/Month/Year</option>
            <option>....</option>
            <option>....</option>
          </select>
        </div>
      </div>

        <div class="row" >
          <div class="col-2 text-right">
            <label for="shiftInput" class="col-form-label">Product</label>
          </div>
          <div class="col-3">
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>Soil</option>
            </select>
          </div>
          <div class="col-2 text-right">
            <label for="shiftInput" class="col-form-label">Checker Name</label>
          </div>
          <div class="col-3">
            <input type="text" class="form-control" id="checkerNameInput" placeholder=""/>
          </div>
        </div>

        <div class="row" >
          <div class="col-2 text-right">
            <label for="shiftInput" class="col-form-label">Main Equipment</label>
          </div>
          <div class="col-3">
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>Semi Mobile Crusher</option>
              <option>Bucket Wheel Excavator</option>
            </select>
          </div>
          <div class="col-2 text-right">
            <label for="shiftInput" class="col-form-label">No.</label>
          </div>
          <div class="col-3">
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>

        <div class="row" >
          <div class="col-2 text-right">
            <label for="numberOfTripInput" class="col-form-label">Number Of Trip</label>
          </div>
          <div class="col-3">
          <input type="text" class="form-control" id="numberOfTripInput" placeholder=""/>
          </div>
          <div class="col-2 text-right">
          </div>
          <div class="col-3">
          </div>
        </div>

        <div class="row" >
          <div class="col-2 text-right">
            <label for="productionInput" class="col-form-label">Production</label>
          </div>
          <div class="col-3">
          <input type="text" class="form-control" id="ProductionInput" placeholder=""/>
          </div>
          <div class="col-2 text-left">
            <label for="bcmInput" class="col-form-label">BCM</label>
          </div>
          <div class="col-3">
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form1;
