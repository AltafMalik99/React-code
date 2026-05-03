import React from 'react'
import Navber from "../components/Navber"

function User(props) {

    console.log("props",props);
    
  return (
    <div>
        user
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h2>{props.id}</h2>
        <Navber name={props.name}/>
        </div>
  )
}


export default User