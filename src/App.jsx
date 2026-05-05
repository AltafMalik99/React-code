
// class 33 work



import React from 'react'
import Button from './components/Button'
import product from './utils/product'

function App() {
  return (
    <div>
      <Button title="App button" subtitle="app button subtitle"/>

      <Button title="App button 2"/>


{/* product data */}

{
  product.map((product)=>{
  console.log("product",product);

   return (
    <div key={product.id}>
      <h1>Name :{product.title}</h1>
      <h1>Rs :{product.price}</h1>
      <h1>Description {product.description}</h1>


    </div>
   )
    
  })
}




      </div>
  )
}

export default App














































// class 32 work.............................................................................................................................................

// // export function NewFunction(){

// //   return (
// //     <>
// //     <h1 className="heading">new fuction</h1>
// //     <button>button in new fuction</button>
// //     <h1></h1>

// //     </>
// //   )
// // }

// // export default  NewFunction;

// import Button from "./components/Button"
// import Footer from "./components/Footer"
// import Navber from "./components/Navber"
// import User from "./utils/User"

// function App() {
//   return (
//     <div>

//       {/* <Navber/> */}
//       my app
//       {/* <NewFunction/> */}
//       {/* <Footer/> */}


//       <User name="ali" age="30" id="100" />

//       <Footer name="this is footer" />


// {/* <Button/> */}

// <Button title="view my work"/>


//     </div>
//   )
// }

// // video 2

// export default App







  

//props
// props properties React me wo data hota hai 
// jo parent components se child components ko bheja hai


// export function App() {
//   return <User name="Ali" />;
// }

// function User(props) {
//   return <h1>Hello {props.name}</h1>;
// }

//  export default App