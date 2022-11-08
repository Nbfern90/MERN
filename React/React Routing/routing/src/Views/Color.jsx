import {useParams} from 'react-router-dom'


const Color = () => {

const {words} = useParams();
const {color1} = useParams();
const {color2} = useParams();

  return (
    <p style={{color: color1,backgroundColor:color2}}>
      Check this {words} Out!
    </p>
  )
}

export default Color
