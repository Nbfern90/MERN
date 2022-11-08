import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Create from './Views/Create';
import Dashboard from './Views/Dashboard';
import Details from './Views/Details';
import Update from './Views/Update';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Create/>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>
          <Route exact path="/products/:id">
            <Details/>
          </Route>
          <Route exact path="/products/:id/edit">
            <Update/>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }


export default App;
