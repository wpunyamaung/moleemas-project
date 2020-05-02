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
                ผลผลิตน้อยกว่าแผนงานควรพิจารณาเรื่องการวางแผนและลำดับการทำงานโดยฝ่ายงานวางแผนและปฏิบัติการควรประชุมหารือร่วมกันและวางแผนงานใหม่
                </a>               
              </div>
            </div>
            <div class="col"/>
          </div>
          <div class="row">
          <div class="col"></div>
          <div class="col-6 pt-4 ">
            <div class="alert alert-warning text-left" role="alert">
              หมายเหตุ ** นิยามการวางแผนและลำดับการทำงานในบ่อเหมือง ได้แก่ ระยะทางระหว่างหน้าขุดจนถึงเครื่องโม่, การวางแผนงานให้เหมาะสมในเรื่องพื้นที่ขุดและความชันของถนนในบ่อเหมือง
              รวมถึงการจัดการจราจรในบ่อเหมือง
            </div>
          </div>
          <div class="col"></div>
        </div> 
      </form>
    </div>
  );
}

export default Form1;
