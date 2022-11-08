// IMPORT REACT FROM OUR DEPENDENCIES
import React, {Component} from 'react';


// CREATE OUR COMPONENT
class Display extends Component{
  render() {
    return(
      <div>
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a Marathon</li>
          <li>Feed the Dogs</li>
        </ul>

      </div>
    )
  }
}



// EXPORT OUR COMPOENET
export default Display;