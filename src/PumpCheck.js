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
                หากน้ำป่าไหลหลากมีความรุนแรงมากไม่ควรเข้าพื้นที่ทำงานอาจทำให้เกิดน้ำท่วมในบ่อเหมือง ต้องรอน้ำป่าไหลหลากหยุด
                และระดับน้ำท่วมลงลดอยู่ในระดับที่สูบออกได้ ตรวจสอบว่าฝ่ายผลิตสามารถสูบน้ำออกได้หรือไม่ ?
                </a>
                <a href="/PumpWork" class="list-group-item list-group-item-action">Yes-สามารถสูบน้ำได้</a>
                <a href="/PumpNotWork" class="list-group-item list-group-item-action">No-ไม่สามารถสูบน้ำได้</a>
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
