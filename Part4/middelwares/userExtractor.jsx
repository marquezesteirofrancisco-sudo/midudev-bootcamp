const jwt = require('jsonwebtoken')
const User = require('../models/user.jsx')

module.exports = async (request, response, next) => {

    const authorization = request.get('authorization')

    let token =''

    if (authorization && authorization.toLowerCase().startsWith('bearer')){
        token = authorization.substring(7)
    }

    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) 
        return response.status(401).json({ error: 'token invalid' })
    
    const {id: userId} = decodedToken

    // aqui solo metemos el id del usuario
    request.userId = userId

    // aqui metemos el usuario validado en la request
    // buscamos el usuario en funcion de la id

    const user = await User.findById(userId)

    request.user = user

    console.log("reques user" + request.user )

    next()
}


 