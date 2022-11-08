import {useParams} from 'react-router-dom'

const Num = () => {

const {id} = useParams();


  return (
    isNaN(id) ?  <div> <h1>The word is: {id}</h1> </div>:<div> <h1>The number is: {id}</h1> </div>
  
  )
  }
export default Num
