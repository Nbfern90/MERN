export default function validateInfo(values){
  let errors = {}

  if(!values.firstName){
    errors.firstName ="First Name Required"
  }else if(values.firstName.length < 2 ){
    errors.firstName ="Must be at least 2 characters"
  }
  
  if(!values.lastName){
    errors.lastName ="Last Name Required"
  } else if(values.lastName.length < 2){
    errors.lastName ="Must be at least 2 characters"
  }

  if(!values.email){
    errors.email ="Email Required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)){
    errors.email="Email is invalid"
  } else if(values.email.length < 5){
    errors.email="Must be at least 5 characters"
  }

  if(!values.password){
    errors.cofirmPassword ="Password Required"
  }else if (values.password.length < 8){
    errors.password ="Must be at least 8 characters"
  }

  if(!values.confirmPassword){
    errors.cofirmPassword ="Confirm Password Required"
  } else if(values.confirmPassword !== values.password){
    errors.cofirmPassword="Passwords do not match"
  }





return errors;
}