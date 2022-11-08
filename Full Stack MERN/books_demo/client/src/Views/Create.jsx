import {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const Create = () => {

    const history= useHistory()

    const [formState, setFormState] = useState({
      title : "",
      pages: 0,
      author: ""
    })

    const[validState,setValidState]=useState({})


    const changeHandler =(e) =>{
      const {name,value} = e.target;
      setFormState({
        ...formState,
        [name] : value
      })
    }

    const submitHandler =(e) =>{
      e.preventDefault();
      axios.post("http://localhost:8000/api/books/create",formState)
        .then(res => {
          setFormState({
            title : "",
            pages: 0,
            author: ""
          })
          history.push("/dashboard")
        })
        .catch(err => { 
          //Handiling Validation
          console.error(err.response)
          const {errors} = err.response.data;
          let errorOBJ={}
          for(let [key, value] of Object.entries(errors)){
            errorOBJ[key] = value.message
          }
          console.log(errorOBJ)
          setValidState(errorOBJ)
        
        })
      

    }

      return (
        <div>
          <form onSubmit={submitHandler}>
            <p>
              Title: <input type="text" name="title" onChange={changeHandler} value ={formState.title}/>
              {(validState.title) ? <p style={{color:"red"}}>{validState.title}</p>:null}
            </p>
            <p>
              Number of Pages: <input type="number" name="pages" id="" onChange={changeHandler} value ={formState.pages}/>
              {(validState.pages) ? <p style={{color:"red"}}>{validState.pages}</p>:null}
            </p>
            <p>
              Author: <input type="text" name="author" id="" onChange={changeHandler} value ={formState.author}/>
              {(validState.author) ? <p style={{color:"red"}}>{validState.author}</p>:null}
            </p>
            <button type="submit">Create</button>
          </form>
        </div>
      )
    }

export default Create
