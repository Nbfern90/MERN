import {BrowserRouter,Switch,Route} from "react-router-dom"
import './App.css';
import Form from './views/Form';
import People from "./views/People";
import Planets from "./views/Planets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Form/>
        <Switch>
          <Route path="/people/:id">
            <People/>
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
