import React from 'react'

function Button(props) {
  console.log("props",props);
  
  return (
    <div>
    <button>{props.title}</button>
    <p>{props.subtitle}</p>

        </div>
  )
}

export default Button