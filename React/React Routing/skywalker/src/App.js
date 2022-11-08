import { BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Person from './Views/Person';
import Planets from './Views/Planets';




function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Form/>
        <Switch>
          <Route path="/people/:id">
            <Person/>
          </Route>
          <Route path="/planets/:id">
            <Planets/>
          </Route>
          

        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
