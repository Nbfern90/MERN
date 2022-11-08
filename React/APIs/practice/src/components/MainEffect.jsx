import {useState, useEffect} from 'react'
//useEffect allows API to render on page load

import axios from "axios"

const MainEffect = () => {


  const [state,setState] = useState()

  useEffect(() => {
    //We put in the code that we would use in our axiosCall();this can be used for instance to access a database
    axios.get('https://swapi.dev/api/people/1/')//
    .then(response=>setState(response.data))//
    .catch(error => console.log(error))//
  },[] /*The array allows us to execute our useEffect callback when necessary */)

//We remove those functions and we we remove the buttons while keeping the ternary function in place

  return (
    <div>
      {(state) ? 
      <div>
        <h1>Name: {state.name}</h1>
        <h2>Birth Year: {state.birth_year}</h2>
        <h2>Mass: {state.mass}</h2>
      </div> :<h1>Loading...</h1>
      }
    </div>
  )
}

export default MainEffect
