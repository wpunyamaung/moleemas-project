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
        <li class="list-group-item">
          <button type="button" class="btn btn-primary" onClick={() => window.location = '/Disaster' }>ภัยธรรมชาติ</button> 
        </li>        
      </ul>
  );
}

export default App;
