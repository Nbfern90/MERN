
export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = 'First Name Required';
  }else if(values.firstName.length < 2 ){
    errors.firstName ="Must be at least 2 characters"
  }
  if (!values.lastName) {
    errors.lastName = 'Last Name Required';
  }else if(values.lastName.length < 2){
    errors.lastName ="Must be at least 2 characters"
  }
 

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }else if(values.email.length < 5){
    errors.email="Must be at least 5 characters"
  }


  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 8 characters or more';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Password is required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
}