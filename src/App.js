import React from 'react';
import './App.css';

function App() {

  var onSubmit = function(){
    alert('test')
    fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })
  }

  return (
    <div className="App">
      <h3 class="card-header info-color white-text text-center py-4">
        <strong>รายงานผลงานประจำวัน โครงการเหมืองขุดและขนดินเหมืองหงสา สปป.ลาว</strong>
      </h3>
      <p class="h4 mb-4"></p>
      <p class="h4 mb-4">บริษัท อิตาเลียนไทยหงสา จำกัด</p>
  
        <ul class="list-group" >
          <li class="list-group-item borderles">
            <button type="button" href='/form1' class="btn btn-primary">Main Equpments</button>  
          </li>
          <li class="list-group-item">
            <button type="button" class="btn btn-primary">Auxiliary Equpmen & Subcontractor (Soil)</button> 
          </li>
          <li class="list-group-item">
            <button type="button" class="btn btn-primary">Auxiliary Equpmen & Subcontractor (Coal)</button> 
          </li>
          <li class="list-group-item">
            <button type="button" class="btn btn-primary">Mine Planning</button> 
          </li>        
        </ul>
    </div>
  );
}

export default App;
