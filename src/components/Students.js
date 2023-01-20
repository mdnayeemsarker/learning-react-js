import React from 'react'
import Common from './Common'
import propTypes from 'prop-types'
const Students = (props) => {
  return (
    <div>
        <h3>{props.name}, {props.age}</h3>
        <Common age={props.age} />
        
    </div>
  )
}

// Students.prototypes = {
//     name: propTypes.string,
//     age: propTypes.array
// }

Students.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}


export default Students