
import './App.css';
import Form from './components/Form';
import BoxDisplay from './components/BoxDisplay';
import {useState} from 'react'

function App() {

const [arrState,setArrState] = useState([]);

const addToArray = (color) => {
  setArrState([...arrState,color])
}


  return (
    <div className="App">
     <Form addToArray={addToArray}/>
     <BoxDisplay colors={arrState}/>
   
    </div>
  );
}

export default App;
