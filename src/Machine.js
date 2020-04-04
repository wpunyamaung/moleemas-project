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
                เกิดปัญหาทางเครื่องจักรทางด้านใด?
                </a>
                <a href="/MachineIssue1Check" class="list-group-item list-group-item-action">เครื่องจักรชำรุดไม่สามารถทำงานได้</a>
                <a href="/MachineIssue2Check" class="list-group-item list-group-item-action">การใช้เครื่องจักรเกินรอบระยะเวลาบำรุงรักษา มีผลทำให้ Production ต่ำกว่าแผนงาน</a>                  
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
