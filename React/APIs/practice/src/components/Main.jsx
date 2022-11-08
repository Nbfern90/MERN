import {useState, useEffect} from 'react'

import axios from "axios"

const Main = () => {


  const [state,setState] = useState()




  const swAPI =() => {
    fetch('https://swapi.dev/api/people/1/')//making a get request to Star Wars API
    .then(response => setState(response.json()))//Successful Response
    

    .catch(error => console.log(error))//Unsuccessful Response

  }

  const axiosCall= () => {
    axios.get('https://swapi.dev/api/people/1/')//Axios turns response into json behind the scenes
    .then(response=>setState(response.data))//Successful Response,we use setState to put that data on our page

    // .then(response=>console.log(response.status))Tells me what kind of request I'm getting back
    .catch(error => console.log(error))//Unsuccessful Response
  }



  return (
    <div>
      <button onClick={swAPI}>Fetch</button>
      <button onClick={axiosCall}>Make API Call</button>

      {(state) ? //Ternary statement used to have state load data after the button is clicked. This allows state to take in the info before displaying it.
      <div>
        <h1>Name: {state.name}</h1>
        <h2>Birth Year: {state.birth_year}</h2>
        <h2>Mass: {state.mass}</h2>
      </div> :<h1>Click the Button</h1>
      }
    </div>
  )
}

export default Main
