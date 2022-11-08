import {useParams} from "react-router-dom";

const User = () => {

  const {name, last} = useParams();
  return (
    <div>
     My name is {name} {last}
    </div>
  )
}

export default User
