import {useState} from 'react'
import { useHistory } from 'react-router-dom'



const Form = (props) => {

  const history = useHistory()
  const [search,setSearch]=useState({
    options: 'people',
    id: ''

  })


  const submitHandler = e=>{
    e.preventDefault();
    search.options ==='people' ? history.push(`/people/${search.id}`): history.push(`/planets/${search.id}`)
    setSearch({
      options: 'people',
      id: ''
  
    })
    history.goForward()
  }


  const changeHandler = e=>{
    setSearch({
      ...search,
      [e.target.name]:e.target.value
    });
  }




  return (
   <div className="container-sm pt-2">
    <form onSubmit={submitHandler} className="d-flex align-items-center">
      <div className="form-floating mb-3 me-2">

          <select className="form-select" placeholder="species" name="options" onChange={changeHandler} value={search.options}>
          
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
          <label htmlFor="species">Search: </label>
      
      </div>
      <div className="form-floating mb-3 me-2">
          <input type="number" placeholder="id" name="id" className="form-control" onChange={changeHandler} value={search.id}/>
          <label >Id:</label>
      </div>
      <div className="mb-3">
      <input type="submit"  value="Search" className="btn btn-primary " />
      </div>
      
    </form>
    </div>
  )
}

export default Form
