
function Footer(props) {

    const footersection = {
        border: "2px solid red",
        backgroundColor : "yellow",
        fontSize: "30px"
    }

  return (
    <div>
        <h1 style={footersection}>Footer</h1>
        <h2>{Footer.name}</h2>
        </div>
  )
}

export default Footer