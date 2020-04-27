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
                แจ้งฝ่ายซ่อมบำรุงตรวจสอบและทำการซ่อมเครื่องจักร และควรวางแผนการผลิตใหม่โดยวิธีการใด ?
                </a>
                <a href="/ContractorAssigned" class="list-group-item list-group-item-action">ให้ผู้รับเหมาเข้าทำงานแทน</a>
                <a href="/MachineAssigned" class="list-group-item list-group-item-action">ใช้เครื่องจักรสำรอง</a>  
                <a href="/ContractorAndMachineAssigned" class="list-group-item list-group-item-action">ใช้ทั้งผู้รับเหมาและเครื่องจักรสำรอง</a>                 
              </div>
            </div>
            <div class="col"/>
          </div>
          <div class="row">
          <div class="col"></div>
          <div class="col-6 pt-4 ">
            <div class="alert alert-warning text-left" role="alert">
              หมายเหตุ ** หากตรวจสอบว่าเครื่องจักรชำรุดเนื่องจากเกินรอบระยะเวลาการบำรุงรักษา ทางหน้างานต้องจอดซ่อมเครื่องจักรซึ่งมีผลกระทบต่อการผลิต
              ทางผู้บริหารต้องวางแผนการทำงานใหม่เพื่อให้สามารถผลิตได้ตามแผนโดยพิจารณาจากตัวเลือกที่กำหนดให้
            </div>
          </div>
          <div class="col"></div>
        </div>  
      </form>
    </div>
  );
}

export default Form1;
