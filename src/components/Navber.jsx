import React from 'react'
import logo from './assets/images/react.png'

function  Navber(props) {
  return (


    <div style={{display:"flex",justifyContent:"space-between"}}>

<div>
    <img style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2dAVNmBhqVvNPAs7LJHnumSH3pHdoWP0bg&s" alt="car logo2" />
</div>

<div>
    <img src={require("./assets/images/react.png")} style={{width:"100px"}} alt="" />
</div>

<div>
    <img style={{width:"100px"}} src={logo} alt="" />
</div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contect</li>
            <li>{props.name}</li>
        </ul>
    </div>
  )
}

export default  Navber
