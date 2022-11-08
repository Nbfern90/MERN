import {BrowserRouter,Switch,Route} from "react-router-dom";
import Num from "./Views/Num";
import './App.css';
import Welcome from "./Views/Welcome";

import Color from "./Views/Color";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/welcome">
            <Welcome/>
          </Route>
          <Route   exact path="/:id">
            <Num/>
          </Route>   
          <Route  path="/:words/:color1/:color2">
            <Color/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
