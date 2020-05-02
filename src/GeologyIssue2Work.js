import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import './App.css';
import './index.css'

function Form1() {

  return (
    <div className="App">
      <form>
      <div class="row">
            <div class="col"/>
            <div class="col">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
                สามารถเข้าพื้นที่ทำงานได้ปกติไม่ส่งผลกระทบต่อระบบการทำงาน แต่ต้องตรวจสอบเสถียรภาพของผนังเหมืองอยู่เสมอว่ามีความรุนแรงเพิ่มขึ้นหรือไม่ ?
                </a>
                <a href="/GeologyIssue2Check" class="list-group-item list-group-item-action">หากตรวจสอบพบความผิดปกติรุนแรงเพิ่มมากขึ้นให้นักธรณีเข้าตรวจสอบโครงสร้างบ่อเหมืองในพื้นที่อีกครั้ง</a>      
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
