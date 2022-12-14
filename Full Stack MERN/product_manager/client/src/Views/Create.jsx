import {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const Create = () => {

    const history=useHistory()

    const[formState,setFormState]=useState({
      title:"",
      price: 0,
      description:""
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
      axios.post("http://localhost:8000/api/products",formState)
        .then(res => {
          setFormState({
            title:"",
            price: 0,
            description:""
          })
          history.push("/dashboard")
        })
        .catch(err =>{
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

    return(
      <div>
        <form onSubmit={submitHandler}>
          <p>
              Title: <input type="text" name="title" onChange={changeHandler} value ={formState.title}/>
              {(validState.title) ? <p style={{color:"red"}}>{validState.title}</p>:null}
          </p>
          <p>
            Price: <input type="number" name="price" onChange={changeHandler} value ={formState.price}/>
            {(validState.price) ? <p style={{color:"red"}}>{validState.price}</p>:null}
          </p>
          <p>
            Description: <input type="text" name="description" onChange={changeHandler} value ={formState.description}/>
            {(validState.description) ? <p style={{color:"red"}}>{validState.description}</p>:null}
          </p>
          <button type="submit">Create</button>

       </form>
      </div>
    )

  }

  export default Create
  