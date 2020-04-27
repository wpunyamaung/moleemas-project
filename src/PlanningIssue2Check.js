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
                ฝ่ายปฏิบัติการตรวจสอบแผนงานจากเจ้าของงานมีความสอดคล้องกับความสามารถในการผลิตของเครื่องจักรหรือไม่ ?
                </a>
                <a href="/PlanningIssue2Work" class="list-group-item list-group-item-action">Yes-มีความสอดคล้องกับการทำงานจริง</a>
                <a href="/PlanningIssue2NotWork" class="list-group-item list-group-item-action">No-ไม่มีความสอดคล้องกับการทำงานจริง</a>                  
              </div>
            </div>
            <div class="col"/>
          </div>
          <div class="row">
          <div class="col"></div>
          <div class="col-6 pt-4 ">
            <div class="alert alert-warning text-left" role="alert">
              หมายเหตุ ** หากแผนจากเจ้าของงานไม่สอดคล้องกับความสามารถในการผลิตของเครื่องจักร 
              เช่น การออกแบบพื้นที่เพื่อติดตั้งเครื่องจักรไม่เหมาะสม อาจส่งผลให้ผลผลิตต่ำกว่าแผนที่กำหนดไว้ 
              เพราะฉนั้นในการกำหนดแผนงานควรพิจารณาความสามารถทำงานของเครื่องจักรแต่ละชนิดด้วย
            </div>
          </div>
          <div class="col"></div>
        </div> 
      </form>
    </div>
  );
}

export default Form1;
