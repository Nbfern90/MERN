import React, {useState} from 'react';
import Form from './components/Hookform';
import Results from './components/Results';

function App() {
  const[state,setState] =useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  return (
    <div className="App">
     <Form inputs ={state} setInputs={setState}/>
     <Results data={state}/>
    </div>
  );
}

export default App;
