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
                กรุณาเลือกปัจจัยที่ทำให้ผลงานน้อยกว่าร้อยละ 80 ของแผนงาน
                </a>
                <a href="/ExternalIssue" class="list-group-item list-group-item-action">ปัจจัยภายนอก เช่น ภัยธรรมชาติ, สภาพทางธรณีวิทยา</a>	
                <a href="/InternalIssue" class="list-group-item list-group-item-action">ปัจจัยภายใน เช่น เครื่องจักร, การวางแผนงาน </a>
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
