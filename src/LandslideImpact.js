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
                ตรวจพบความผิดปกติในบางพื้นที่บางจุด สามารถเข้าทำงานได้หรือไม่?
                </a>
                <a href="/LandslideWork" class="list-group-item list-group-item-action">พื้นที่บางจุดสามารถเข้าทำงานได้</a>
                <a href="/LandslideNoWork" class="list-group-item list-group-item-action">ไม่สามารถเข้าพื้นที่ทำงานได้</a>
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
