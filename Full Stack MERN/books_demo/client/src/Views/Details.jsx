import {useEffect,useState} from 'react';
import axios from 'axios'
import {useParams,Link,useHistory} from 'react-router-dom'


const Details = () => {

    const {id} = useParams()
    const history = useHistory()
    const [bookState,setBookState] = useState(null)

    useEffect(() =>{
      axios.get(`http://localhost:8000/api/books/${id}`)
        .then(res=>setBookState(res.data))
        .catch(err => console.error(err))
    },[])

    const deleteHandler=() => {
      axios.delete(`http://localhost:8000/api/books/${id}`)
      .then(res =>history.push('/dashboard'))
      .catch(err => console.error(err))
    }


  return (
    <div>
    {
      (bookState) ?
      <div>
        <h1>Title: {bookState.title}</h1>
        <h2>Author: {bookState.author}</h2>
        <h2>Pages: {bookState.pages}</h2>
        <Link to={`/books/${bookState._id}/edit`}>Edit </Link>
        <button onClick={deleteHandler}> Delete</button>
      </div>:null
    }
    </div>
  
  )
}

export default Details
