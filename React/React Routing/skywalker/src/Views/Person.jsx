import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState,useEffect} from 'react'








const Person = () => {

  const {id} = useParams();
  const [state,setState] = useState()

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/'+ id)//
    .then(response=>setState(response.data))//
    .catch(error => console.log(error))//
    console.log(state)
  },[id])


  return (
    <div>
       {(state) ? 
      <div>
        <h1>Name: {state.name}</h1>
        <h2>Height: {state.birth_year}</h2>
        <h2>Mass: {state.mass}</h2>
        <h2>Hair Color: {state.hair_color}</h2>
        <h2>Skin Color: {state.skin_color}</h2>
      </div> : <h1>Loading...</h1>
      }


     
    </div>
  )
}

export default Person
