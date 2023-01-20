import React from 'react'
import Common from './Common'
const Students = (props) => {
  return (
    <div>
        <h3>{props.name}, {props.age}<Common age={props.age} /></h3>
        
    </div>
  )
}

export default Students