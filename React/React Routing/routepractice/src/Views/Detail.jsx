import {useParams} from 'react-router-dom'

const Detail = () => {

const {id} = useParams(); //this must match the colon vaiable name in our app.js


  return (
    <div>
      <h4>This Page is for the user with ID: {id}</h4>
      
      
    </div>
  )
}

export default Detail
