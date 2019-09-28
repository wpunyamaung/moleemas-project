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
      <ul class="list-group" >
        <li class="list-group-item borderles">
          <button type="button" class="btn btn-primary" onClick={() => window.location = '/A-Main' }>Main Equpments</button>  
        </li>
        <li class="list-group-item">
          <button type="button" class="btn btn-primary" onClick={() => window.location = '/B-AuxSub' }>Auxiliary Equpmen & Subcontractor (Soil)</button> 
        </li>
        <li class="list-group-item">
          <button type="button" class="btn btn-primary" onClick={() => window.location = '/' }>Auxiliary Equpmen & Subcontractor (Coal)</button> 
        </li>
        <li class="list-group-item">
          <button type="button" class="btn btn-primary" onClick={() => window.location = '/' }>Mine Planning</button> 
        </li>        
      </ul>
  );
}

export default App;
