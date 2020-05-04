const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)
    // helper.initialBlogs.map(async b => {
    //     await new Blog(b).save()
    // })
    // //await Promise.all(promiseArray)
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

test('a valid blog can be added ', async () => {

    const newBlog = {
        title: 'testing backend',
        author: 'TT',
        url: 'http://localhost/myblog',
        likes: 205
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)  // materiaalissa 200?
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const titles = response.body.map(r => r.title)

    expect(response.body).toHaveLength(helper.initialBlogs.length + 1)
    expect(titles).toContain(
        'testing backend'
    )
})

test('missing property likes defaults to 0 ', async () => {

    const titleStr = 'a-a-a-b-b-b-c-c-c-'
    const newBlog = {
        title: titleStr,
        author: 'TT',
        url: 'http://localhost/myblog',
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)  // materiaalissa 200?
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')
    const missingLikes = response.body.filter(t => t.title === titleStr)
    expect(missingLikes[0].likes).toBe(0)
})

test('blog POST without title and url will get status 400', async () => {

    const newBlog = {
        author: 'TT',
    }

    const response = await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)

    // const response = await api.get('/api/blogs')
    // const missingLikes = response.body.filter(t => t.title === titleStr)
    expect(response.status).toBe(400)
})

afterAll(() => {
    mongoose.connection.close()
})
