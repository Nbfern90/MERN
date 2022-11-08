import axios from 'axios'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {

    const [books, setBooks] =useState([])
    const[deleteState,setDeleteState]= useState(false)

    useEffect(() =>{
      axios.get("http://localhost:8000/api/books")
      .then(res=>setBooks(res.data))
      .catch(err => console.error(err))
    },[deleteState])

    const deleteHandler = (id) => {
      axios.delete(`http://localhost:8000/api/books/${id}`)
      .then(res =>setDeleteState(!deleteState))
      .catch(err => console.error(err))

    }

      return (
        <ul>
          {
            books.map((book,idx)=> {
              return(
                <>
                <li key={idx}>
                  <Link to={`/books/${book._id}`}>
                    {book.title}
                  </Link>
                </li>
                
                <button onClick={()=>deleteHandler(book._id)}>Delete</button>
                </>
              )
            })
          }
        </ul>
      )
    }

export default Dashboard
