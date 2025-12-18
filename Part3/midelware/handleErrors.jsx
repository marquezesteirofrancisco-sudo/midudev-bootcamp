module.exports = (error, request, response) => {
    
    console.log("Error handling middleware invoked")
    console.error(error.name)

    if (error.name === 'CastError' || error.name === 'ValidationError') {
        return response.status(400).send({error: 'malformatted id'})
    }else{
        return response.status(500).end()
    }
}