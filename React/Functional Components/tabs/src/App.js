import './App.css'
import {useState} from 'react'
import Header from './components/Header';
import Results from './components/Results';

function App() {

const[tabs, setTabs]=useState({
  content:[
    'I am Tab 1',
    'I am Tab 2',
    'I am Tab 3',
   
  ],
  tab: 0,
});



  return (
    <div className="App">
      <Header tabs={tabs} setTabs={setTabs}/>
      <Results tabs={tabs}/>
    </div>
  );
}

export default App;
