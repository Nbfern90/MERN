import {useState} from "react"
import{useHistory} from "react-router-dom"

const Form = (props) => {

  const[people,setPeople] = useState("people");
  const [id,setId] = useState(1);
  const history = useHistory()

const submitHandler = (e) =>{
  e.preventDefault();
  history.push(`/${people}/${id}`)
}


  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Search For: </label>
        <select onChange={e=> setPeople(e.target.value)} value={people} >
          <option>People</option>
          <option>Planets</option>
        </select>
        <input onChange={e=> setId(e.target.value)} value={id}type="number"/>
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default Form
