import useForm from './useForm';
import validate from './validateInfo';

const FormSignup = () => {
  const {changeHandler,values,submitHandler,errors}= useForm(validate);
  return (
   <div className="form-content-right">
     <form onsubmit={submitHandler}>
       <div>
       <label htmlFor="firstName">First Name:</label>
       <input type="text" name="firstName" id="firstName" placeholder="First Name" value={values.firstName} onChange={changeHandler}/>
       {errors.firstName && <p>{errors.firstName}</p>}
</div>

       <div>
       <label htmlFor="lastName">Last Name:</label>
       <input type="text" name="lastName" id="lastName" placeholder="Last Name"
       value={values.lastName} onChange={changeHandler}/>
       </div>

       <div>
       <label htmlFor="email">Email:</label>
       <input type="text" name="email"id="email" placeholder="Email"
       value={values.email} onChange={changeHandler}/>
       </div>

       <div>
       <label htmlFor="password">Password:</label>
       <input type="password" name="password" id="password" placeholder="Password"
       value={values.password} onChange={changeHandler}/>
       </div>

       <div>
       <label htmlFor="confirmPassword">Confirm Password:</label>
       <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"
       value={values.confirmPassword} onChange={changeHandler}/>
       </div>

       <button type="submit" className="btn">Submit</button>
     </form>
   </div>
  )
}

export default FormSignup
