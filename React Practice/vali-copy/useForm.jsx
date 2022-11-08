import { useState} from "react"

const useForm = validate => {
  const [values,setValues] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
  })
  const [errors,setErrors] = useState({})


  const changeHandler = (e) =>{
    const {name,value} = e.target
    setValues({
      ...values,
      [name]:value
    })
  }


const submitHandler = (e) =>{
  e.preventDefault();

  setErrors(validate(values))
}
  
  return {changeHandler,values,submitHandler,errors}
}

export default useForm
