const Notification = ({message, iserror}) => {

    console.log({message, iserror})

    if (!message)
       return null;

    return(

        <div className= {iserror ? "IsError" : "NoError"}>
            {message}
        </div> 



    )
}
export default Notification