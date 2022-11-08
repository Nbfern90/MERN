
import './App.css';
import {BrowserRouter,Link,Switch,Route} from "react-router-dom"
import Auth from './Views/Auth';
import Dashboard from './Views/Dashboard';
import Navbar from './components/Navbar';
import Detail from './Views/Detail';




function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Auth/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/users/:id">
            <Detail/>
          </Route>
        </Switch>
    
    </BrowserRouter>
  );
}

export default App;
