import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
    
const Location = (props) => {

  const {city} = useParams()
  return (
    <h1>Welcome to {city}</h1>
  );
}
    
function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/location/seattle">Seattle</Link>
        &nbsp;|&nbsp;
        <Link to="/location/chicago">Chicago</Link>
        &nbsp;|&nbsp;
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Switch>
        <Route path="/location/:city">
          <Location />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;
