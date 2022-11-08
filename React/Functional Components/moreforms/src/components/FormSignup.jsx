import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';


const FormSignup = () => {
  const { changeHandler,values,submitHandler,errors} = useForm(validate);

  return (
    <div >
      <form onSubmit={submitHandler} >
       
        <div >
          <label >First Name:</label>
          <input
          
            type='text'
            name='firstName'
            placeholder='First Name'
            value={values.firstName}
            onChange={changeHandler}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>

        <div >
          <label >Last Name:</label>
          <input
           
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={values.lastName}
            onChange={changeHandler}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            
            type='email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={changeHandler}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div >
          <label >Password</label>
          <input
           
            type='password'
            name='password'
            placeholder='Password'
            value={values.password}
            onChange={changeHandler}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div >
          <label>Confirm Password</label>
          <input
            
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={values.confirmPassword}
            onChange={changeHandler}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button  type='submit'>
          Submit
        </button>
       
      </form>
    </div>
  );
};

export default FormSignup;