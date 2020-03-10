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
                แจ้งช่างแมคคานิคตรวจสอบเครื่องจักรว่ามีผลต่อการทำงานหรือไม่
                </a>
                <a href="/MachineIssue2NotWork" class="list-group-item list-group-item-action">Y-ตรวจสอบแล้วพบว่ามีผลต่อการทำงาน</a>
                <a href="/MachineIssue2Work" class="list-group-item list-group-item-action">N-ตรวจสอบแล้วพบว่าไม่มีผลต่อการทำงาน</a>                  
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
