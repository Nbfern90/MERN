import {useEffect,useState} from 'react';
import axios from 'axios'
import {useParams,Link,useHistory} from 'react-router-dom'




const Details = () => {
  const{id}=useParams()
  const[productState,setProductState] = useState(null)
  const history = useHistory()

    useEffect(() => {
      axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>setProductState(res.data))
        .catch(err=>console.log(err))
    },[])

    const deleteHandler=()=> {
      axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res => history.push('/dashboard'))
        .catch(err=>console.log(err))
    }


  return (
    <div>
      {
        (productState) ?
        <div>
          <h1>Title: {productState.title}</h1>
          <h2>Description: {productState.description}</h2>
          <h2>Price: ${productState.price}</h2>
          <Link to={`/products/${productState._id}/edit`}>Edit</Link>
          <button onClick={deleteHandler}>Delete</button>

        </div>:null
      }
    </div>
  )
}

export default Details
