import React, { useState, useEffect } from 'react';

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
                สามารถสูบน้ำได้ ควรย้ายเครื่องจักรไปทำงานในพื้นที่อื่นก่อนเพื่อให้สามารถผลิตได้ตามแผนงาน หากพื้นที่บริเวณนั้นแห้งแล้วให้เข้าทำงานได้ตามปกติ 
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
