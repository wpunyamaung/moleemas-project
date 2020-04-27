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
                เกิดจากสภาพทางธรณีวิทยาประเภทใด ?
                </a>
                <a href="/GeologyIssue1Check" class="list-group-item list-group-item-action">เกิดจากวัตถุที่ขุดขนไม่ใช่ดิน เช่น หินก้อนใหญ่, เศษรากไม้, ถ่านหินลิกไนต์, ชิ้นโลหะของเครื่องจักร</a>
                <a href="/GeologyIssue2Check" class="list-group-item list-group-item-action">เกิดจากสภาพโครงสร้างบ่อเหมืองผิดปกติ เช่น ผนังบ่อเหมืองมีรอยร้าวหรือเกิดการพังทลายของหน้าดิน</a>                  
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
