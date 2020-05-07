const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const logger = require('../utils/logger')

// const pwCheck = async (pw) => {
// } 

usersRouter.post('/', async (request, response, next) => {


    const body = request.body
    if (body.password.length < 4) {
        return response.status(400).json( {error: 'password not valid (too short)'} )
    }
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        username: body.username,
        name: body.name,
        passwordHash,
    })

    try {
        const savedUser = await user.save()
        response.json(savedUser)
    } catch (error) {
        response.status(400).json({error: error.message})        
    }
    
})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('blog')
    response.json(users.map(u => u.toJSON()))
})

module.exports = usersRouter