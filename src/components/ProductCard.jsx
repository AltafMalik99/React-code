import React from 'react'

function ProductCard({title,description,price,image}) {
  return (
    <div
    style={{
        width: "250px",
        backgroundColor:"red",
        borderRadius:"10px",
        boxShadow:"0 4px 12px "
    }}
    >

        <img src={image}
         alt={title}
         style={{width:"100px"}}/>

    </div>
  )
}

export default ProductCard
