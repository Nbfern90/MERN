

const Planets = () => {


  
  const {id} = useParams();
  const [state,setState] = useState()

  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/'+ id)//
    .then(response=>setState(response.data))//
    .catch(error => console.log(error))//
    console.log(state)
  },[id])


  return (
    <div>
       {(state) ? 
      <div>
        <h1>Name: {state.name}</h1>
        <h2>Climate: {state.climate}</h2>
        <h2>Terrain: {state.terrain}</h2>
        <h2>Surface Water: {state.surface_water}</h2>
        <h2>Population: {state.population}</h2>
      </div> : <h1>Loading...</h1>
      }
    </div>
  )
}

export default Planets
