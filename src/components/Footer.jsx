import  'tailwindcss'

function Footer(props) {

    const footersection = {
        border: "2px solid red",
        backgroundColor : "yellow",
        fontSize: "30px"
    }

  return (
    <div>
        <h1 style={footersection}>Footer</h1>
        <h2>{props.name}</h2>
        <h2>{props.name11}</h2>

        </div>
  )
}

export default Footer