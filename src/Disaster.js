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
                เกิดจากภัยธรรมชาติประเภทใด?
                </a>
                <a href="/EarthquakeCheck" class="list-group-item list-group-item-action">แผ่นดินไหว</a>
                <a href="/StromCheck" class="list-group-item list-group-item-action">พายุฝนตกหนัก</a>
                <a href="/FloodCheck" class="list-group-item list-group-item-action">น้ำป่าไหลหลาก</a> 
                <a href="/LandslideCheck" class="list-group-item list-group-item-action">ดินถล่ม</a>                      
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
