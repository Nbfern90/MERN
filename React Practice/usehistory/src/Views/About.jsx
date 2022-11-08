import {useLocation, useHistory} from 'react-router-dom'


const About = () => {
  const location = useLocation()
  const history = useHistory()


  const goBackHandle = () => {
    history.goBack();
  }

  console.log(location)
  return (
    <>
    <div>
      About
    </div>
    <div>Location = {location.pathname}</div>
    <div>From = {location.state.from}</div>
    <button onClick={goBackHandle}>Go Back</button>
    </>
  )
}

export default About
