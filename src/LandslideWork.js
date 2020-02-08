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
                พื้นที่บางจุดสามารถเข้าทำงานได้ หากมีระยะไกลพอสมควรจากพื้นที่ดินถล่ม 
                อาจจะใช้ผู้รับเหมาเข้าทำงานแทนเนื่องจากเป็นเครื่องจักรเล็ก
                </a>
              </div>
            </div>
            <div class="col"/>
          </div>
      </form>
    </div>
  );
}

export default Form1;
