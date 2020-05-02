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
                แจ้งฝ่ายซ่อมบำรุงตรวจสอบ สามารถซ่อมเครื่องจักรที่ชำรุดภายในเวลาหนึ่งชั่วโมงได้หรือไม่ ?
                </a>
                <a href="/MachineIssue1Work" class="list-group-item list-group-item-action">Yes-สามารถซ่อมได้ทันที</a> 
                <a href="/MachineIssue1NotWork" class="list-group-item list-group-item-action">No-ไม่สามารถซ่อมได้</a>                 
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
