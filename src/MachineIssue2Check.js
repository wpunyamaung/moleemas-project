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
                เมื่อถึงรอบระยะเวลาการซ่อมบำรุง ช่างแมคคานิคจะทำการตรวจเช็คเครื่องจักร 
                ซึ่งหากเครื่องจักรมีอาการผิดปกติจะมีผลต่อการทำงานหรือไ
                </a>
                <a href="/MachineIssue2NotWork" class="list-group-item list-group-item-action">ตรวจสอบพบความผิดปกติ</a>
                <a href="/MachineIssue2Work" class="list-group-item list-group-item-action">ไม่พบความผิดปกติใดๆ</a>                  
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;