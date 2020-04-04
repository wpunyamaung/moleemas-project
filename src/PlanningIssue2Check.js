import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import './App.css';
import './index.css'

function Form1() {

  return (
    <div className="App">
      {/* <div class="col-2 text-left">
        <button type="button" class="btn btn-secondary" onClick={() => window.location = '/App'}> Main menu </button>
      </div> */}
      <form>
        <div class="row">
            <div class="col"/>
            <div class="col">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
                ฝ่ายปฏิบัติการตรวจสอบแผนงานจากเจ้าของงานเทียบกับความสามารถในการผลิตของเครื่องจักรหน้างานจริง 
                มีความสอดคล้องและมีความสัมพันธ์กันหรือไม่
                </a>
                <a href="/PlanningIssue2Work" class="list-group-item list-group-item-action">Yes-ตรวจสอบแล้วมีความสอดคล้องและสัมพันธ์</a>
                <a href="/PlanningIssue2NotWork" class="list-group-item list-group-item-action">No-ตรวจสอบแล้วไม่มีความสอดคล้องและสัมพันธ์</a>                  
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
