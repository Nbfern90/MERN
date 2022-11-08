import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

const employees= [
  {
    id:1,
    name: 'John'
  },
  {
    id:2,
    name:'Dave'
  },
  {
    id:3,
    name:'Mike'
  }

];
 

function App() {
  return (
    <div className="App">
      {employees.map((employee) =>
      <Employee key={employee.id} name={employee.name} id={employee.id}/>
   )
 }
    
    </div>
  );
}

export default App;
