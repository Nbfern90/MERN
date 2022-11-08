import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Home from './Views/Home';
import About from './Views/About';
import User from './Views/User';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <ul className="nodot">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={
              {
              pathname: "/about",
              state: {
                from: "root"
              }
            }

            }>About</Link>
          </li>
          <li>
            <Link to="/user/john/Smith">User</Link>
          </li>
        </ul>
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/user/:name/:last">
              <User/>
            </Route>
          </Switch>
        </div>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
