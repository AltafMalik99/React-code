import React from 'react'
import logo from './assets/images/react.png'

function  Navber() {
  return (


    <div style={{display:"flex",justifyContent:"space-between"}}>

<div>
    <img style={{width:"100px"}} src="https://create-react-app.dev/img/logo-og.png" alt="car logo" />
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
        </ul>
    </div>
  )
}

export default  Navber

function noor(){
    var malik = "hello"
}
noor()