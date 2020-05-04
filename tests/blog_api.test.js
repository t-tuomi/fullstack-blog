const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

beforeEach(async () => {
    await Blog.deleteMany({})

    helper.initialBlogs.map(async b => {
        await new Blog(b).save()
    })
    // let blogObject = new Blog(helper.initialBlogs[0])
    // await noteObject.save()

})

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test(`there are ${helper.initialBlogs.length} blogs`, async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('the first blog\'s title is \'React patterns\'', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].title).toBe('React patterns')
})

test('property _id is named id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
})


afterAll(() => {
    mongoose.connection.close()
})
