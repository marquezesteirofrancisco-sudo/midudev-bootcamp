const Mensaje = (props) => {
  
  console.log(props.messaje)

  return <h1 style={{color: props.color}}>{props.messaje}</h1>
  
}


export default Mensaje 


