import {useEffect,useState} from 'react';
import axios from 'axios'
import {useParams,Link} from 'react-router-dom'



const Details = () => {
  const {id} = useParams()
  const[pirateState,setPirateState] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pirates/${id}`)
      .then(res=>setPirateState(res.data))
      .catch(err => console.error(err))
  },[])



  return (
    <div>
      <Link to="/pirates">
        <button>Back to Crew</button>
      </Link>
      {
        (pirateState) ?
      <div>
        <h1>{pirateState.name}</h1>
        <img src={pirateState.image} alt="a Pirate" width="100" height="100" />
        <h2>{pirateState.phrase}</h2>
        <br />
        <h3>About</h3>
        <ul>
          <li>Position: {pirateState.position}</li>
          <li>Treasures: {pirateState.chests}</li>
          <li>Peg Leg: {pirateState.pegleg}</li>
          <li>Eye Patch: {pirateState.eyepatch}</li>
          <li>Hook Hand: {pirateState.hook}</li>
        </ul>
      </div>:null

      }
    </div>
  )
}

export default Details
