
// // class 33 work part 1

// import React from 'react'
// import Button from './components/Button'
// import product from './utils/product'

// function App() {
//   return (
//     <div>
//       {/* <Button title="App button" subtitle="app button subtitle"/>

//       <Button title="App button 2"/> */}


// {/* product data */}
// {
//   product.map((product)=>{
//   // console.log("product",product);
//    return (
//     <div key={product.id}>
//       <img style={{width:"300px",border:"2px solid red",borderRadius:"30px"}} src={product.image} alt="shoes image" />
//       <h1>Name :{product.title}</h1>
//       <h1>Rs :{product.price}</h1>
//       <h1>Description {product.description}</h1>
//       <hr />
//     </div>
//    )
    
//   })
// }
//       </div>
//   )
// }

// export default App



// pertices code............................................................................................................................

// function App() {
//   return (
//     <div>
// {
//   product.map((product)=>{
//    return (
//     <div key={product.id}>
//       <img style={{width:"300px",border:"2px solid red",borderRadius:"30px"}} src={product.image} alt="shoes image" />
//       <h1>Name :{product.title}</h1>
//       <h1>Rs :{product.price}</h1>
//       <h1>Description {product.description}</h1>
//       <hr />
//     </div>
//    )
    
//   })
// }
//       </div>
//   )
// }


// ........................................................................................................................................................................... 



// card code..............................................................................................................................


// function App() {
//   return (
//     <div>
// {
//   product.map((product)=>{
//     return(
//       <div className="p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80">
//             <img className="rounded-md max-h-40 w-full object-cover" src={product.image} alt="officeImage" />
//             <p className="text-gray-900 text-xl font-semibold ml-2 mt-4">
//                 <h1>{product.title}</h1>
//                 <h1>{product.price}</h1>
//                 <h1>{product.description}</h1>


//             </p>
//             <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
//             </p>
//         </div>
//   )
//   })
// }
//       </div>
//   )
// }

// export default App


// ...............................................................................................................................................................




// import React from 'react'
// import ProductCard from './components/ProductCard'



// function App() {
//   return (
//     <div>



// {
//  products.map((product)=>{
//   return (
 
// <div>
// <ProductCard title={product.title}
// description={product.description}
// price={product.price}
// image={product.image}
// />
// </div>
//     )
//   })
// }

// <ProductCard title="shoes" description="this is brand" price=":100"/>
// <ProductCard title="shoes" description="this is brand" price=":100"/>

//     </div>
//   )
// }

// export default App



// video 1:00








// import React from 'react'
// import Button from './components/Button'
// import './App.css'


// function App() {
//   return (
//     <div>    

// <div>app</div>
// <Button title="login"/>
// <Button title="service"/>
// <Button title="contect"/>

//     </div>
//   )
// }

// export defa




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









import React from 'react'
import Button from './components/Button'
import products from './utils/product'



function App() {
  return (
    <div>
  <Button title="this btn" subtitle="thia is second btn"/>
    <Button title="this btn"/>


{
  products.map((products)=>{
    return console.log("product",products);
    
  })
}


    </div>
  )
}

export default App
















