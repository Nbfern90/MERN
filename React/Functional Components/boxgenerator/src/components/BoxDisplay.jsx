import React from 'react'

const BoxDisplay = (props) => {

  const {colors} = props
  console.log(colors)

return(
  <div style={{"display": "flex"}}>
    {
      colors.map((color,i) => <div key={i} style={{"backgroundColor" : color, "width": "200px","height": "200px","margin-right":"10px" }} >{color}</div>  )
    }
   
  </div>
)
  }
export default BoxDisplay
