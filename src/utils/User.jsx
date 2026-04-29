import React from 'react'

function User(props) {
    console.log("props",props);
    
  return (
    <div>
        user
        <h1>{props.id}</h1>
        <h2>{props.age}</h2>

        </div>
  )
}

export default User