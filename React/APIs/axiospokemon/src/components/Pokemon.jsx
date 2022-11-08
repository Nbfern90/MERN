import{useState} from 'react'
import axios from 'axios'

const Pokemon = () => {

  const [state,setState]=useState(0
    )
    
   

    const axiosCall =()=>{
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => setState({pokemon: response.data.results}))
      .catch(error => console.log(error))

    }
    




  return (
    <div>
       <button onClick={axiosCall}>Click Me</button>
      {state.pokemon ? state.pokemon.map((i,index)=>{
        return <div key={index}>{i.name}</div>
      }):null}
  
    </div>
  )
}

export default Pokemon
