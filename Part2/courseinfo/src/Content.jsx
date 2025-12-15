const Content = ({parts}) => {

  return (

    <div>
      {
        parts.map(  (curso, index) => (

            <div key ={index}>

              <p> {curso.name} {curso.exercises} </p>

            </div>
          )
          
        )
      }

    <p> <strong>Total of  {  parts.reduce((acc, part) => acc + part.exercises, 0) } exercises </strong></p>

    </div> 
    
  )
}

export default Content;