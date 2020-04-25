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
                พบวัตถุปนเปื้อนประเภทใด?
                </a>
                <a href="/Rock" class="list-group-item list-group-item-action">พบหินก้อนใหญ่/เศษรากไม้</a>
                <a href="/Lignite" class="list-group-item list-group-item-action">พบถ่านหินลิกไนต์</a> 
                <a href="/Metal" class="list-group-item list-group-item-action">พบเศษโลหะของเครื่องจักร</a>                                 
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
