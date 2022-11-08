import axios from 'axios';
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'




const Dashboard = () => {


  const [pirates, setPirates] =useState([])
  const[deleteState,setDeleteState]= useState(false)

  useEffect(() =>{
    axios.get("http://localhost:8000/api/pirates")
    .then(res=>setPirates(res.data))
    .catch(err => console.error(err))
  },[deleteState])

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/pirates/${id}`)
    .then(res =>setDeleteState(!deleteState))
    .catch(err => console.error(err))

  }

    return (
    
      <ul>
        <h1>Pirate Crew</h1>
        <Link to="/pirate/new">
          <button>Add Pirate</button>
          </Link>
        {
          pirates.map((pirate,idx)=> {
            return(
              <>
              <li key={idx}>
                  {pirate.name} <img src={pirate.image} width="100" height="100" alt="Photo of Pirate" />
              </li>
               <Link to={`/pirates/${pirate._id}`}>
                <button>View Pirate</button>
              </Link>
              <button onClick={()=>deleteHandler(pirate._id)}>Delete</button>
              </>
            )
          })
        }
      </ul>
    )
  }

export default Dashboard
