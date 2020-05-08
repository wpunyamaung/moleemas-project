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
                สามารถเข้าพิื้นที่ทำงานได้ตามปกติ แต่ควรตรวจสอบเสถียรภาพของผนังบ่อเหมืองซ้ำอยู่เสมอว่ามีการเกิดพังทลายของหน้าดินรุนแรงเพิ่มขึ้นหรือไม่ ?
                </a>
                <a href="/GeologyEffect" class="list-group-item list-group-item-action">Yes-ตรวจสอบแล้วมีความรุนแรงเพิ่มขึ้น</a>
                <a href="/GeologyNotEffect" class="list-group-item list-group-item-action">No-ตรวจสอบแล้วไม่มีความรุนแรงเพิ่มขึ้น</a>      
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
