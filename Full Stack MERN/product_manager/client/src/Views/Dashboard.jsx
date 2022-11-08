import axios from 'axios'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'


const Dashboard = () => {

  const [products,setProducts]=useState([])
  const[deleteState,setDeleteState]= useState(false)

  useEffect(() =>{
    axios.get("http://localhost:8000/api/products")
      .then(res=>setProducts(res.data))
      .catch(err =>console.error(err))
  },[deleteState])

  const deleteHandler = (id) => {
    
    axios.delete(`http://localhost:8000/api/products/${id}`)
    .then(res => setDeleteState(!deleteState))
    .catch(err=>console.log(err))

  }

  return (
    <ul>
      {
        products.map((product,idx)=>{
          return(
            <>
            <li key={idx}>
              <Link to={`/products/${product._id}`}>
              {product.title}
              </Link>
            </li>
            <button onClick={()=>deleteHandler(product._id)}>Delete</button>
            </>
          )
        })
      }
    </ul>
  )
}

export default Dashboard
