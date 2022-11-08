import React, {useState} from 'react'


const Form = (props) => {

const [inputState,setInputState] = useState('')
const {addToArray} = props

const submitHandler = (e) => {
  e.preventDefault()
  addToArray(inputState)
  setInputState("")
}

  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>
          Color:
          <input type="text" name="color" id="color" onChange={(e) => setInputState(e.target.value)} value={inputState} />
        </p>
        <button type="submit">Add</button>
      </form>
      
    </div>
  )
}

export default Form
