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
                <a href="/MachineIssue1Check" class="list-group-item list-group-item-action">เครื่องจักรชำรุดก่อนรอบระยะเวลาการบำรุงรักษา</a>
                <a href="/MachineIssue2Check" class="list-group-item list-group-item-action">เครื่องจักรชำรุดเกินรอบระยะเวลาการบำรุงรักษา</a>                  
              </div>
            </div>
            <div class="col"/>
          </div>
          <div class="row">
          <div class="col"></div>
          <div class="col-6 pt-4 ">
            <div class="alert alert-warning text-left" role="alert">
              หมายเหตุ ** หากตรวจสอบพบว่าเครื่องจักรชำรุดเนื่องจากเกิดเกินรอบระยะเวลาบำรุงรักษา ทางหน้างานต้องจอดซ่อมเครื่องจัรก 
              ทำให้ขาดเครื่อจักรในการทำงานซึ่งมีผลกระทบต่อผลผลิต ทางผู้บริหารต้องวางแผนการทำงานใหม่เพื่อให้สามารถผลิตได้ตามแผนโดยพิจารณาตัวเลือกที่กำหนดให้


            </div>
          </div>
          <div class="col"></div>
        </div>  
      </form>
    </div>
  );
}

export default Form1;
