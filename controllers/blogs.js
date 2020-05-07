
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user')
    response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', async (request, response) => {
    const users = await User.find({})
    console.log(users[0]._id)
    request.body.user = users[0]._id
    console.log(request.body)
    const blog = new Blog(request.body)
    if (!request.body.title || !request.body.url) {
        response.status(400).end()
        return
    }
    const status = await blog.save()
    response.status(201).json(status)
})

blogsRouter.delete('/:id', async (request, response) => {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
    const body = request.body
    const blog = {
        likes: body.likes,
    }
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    response.json(updatedBlog.toJSON())
})
module.exports = blogsRouter
