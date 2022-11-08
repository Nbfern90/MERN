import {Link} from "react-router-dom"
const Dashboard = () => {


const idArr= [1,2,3,4,5,6]

  return (
    <div>
      {
        idArr.map((id,idx) =>{  //the idx key must be applied to most parent element
          return( //need this return because of the multi-line arrow function
            <p key={idx}>            
            <Link  to={`/users/${id}`}>Detail</Link> 
            </p>
          )
        })
      }
    </div>
  )
}

export default Dashboard
