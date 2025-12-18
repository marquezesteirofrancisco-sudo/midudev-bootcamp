module.exports = (request, response, next) => {
    console.log("404 - not found middleware invoked..")
    response.status(404).send({error: 'not founds'}) 
} 

