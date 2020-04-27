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
                ฝ่ายปฏิบัติการตรวจสอบการวางแผนและลำดับการทำงานในบ่อเหมืองมีความสอดคล้องกับการทำงานจริงหรือไม่ ?
                </a>
                <a href="/PlanningIssue1Work" class="list-group-item list-group-item-action">Yes-มีความสอดคล้องกับการทำงานจริง</a>
                <a href="/PlanningIssue1NotWork" class="list-group-item list-group-item-action">No-ไม่มีความสอดคล้องกับการทำงานจริง</a>                  
              </div>
            </div>
            <div class="col"/>
          </div>
          <div class="row">
          <div class="col"></div>
          <div class="col-6 pt-4 ">
            <div class="alert alert-warning text-left" role="alert">
              หมายเหตุ ** การวางแผนและลำดับการทำงานในบ่อเหมือง ได้แก่ ระยะทางในการขนส่งระหว่างหน้าขุดจนถึงเครื่องโม่
              การวางแผนงานให้เหมาะสมในเรื่องพื้นที่ขุดและความชันของถนนในบ่อเหมือง, การจัดการจราจรในบ่อเหมือง
            </div>
          </div>
          <div class="col"></div>
        </div> 
      </form>
    </div>
  );
}

export default Form1;
