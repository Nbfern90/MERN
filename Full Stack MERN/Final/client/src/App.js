
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import Create from './Views/Create';
import Dashboard from './Views/Dashboard';
import Details from './Views/Details';

function App() {





  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/pirate/new">
          <Create/>
        </Route>
        <Route exact path="/pirates">
          <Dashboard/>
        </Route>
        <Route exact path="/pirates/:id">
          <Details/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
