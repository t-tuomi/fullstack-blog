const listHelper = require('../utils/list_helper')
const blogs = require('./blogarray')

describe('favourite blog', () => {

    test('a blog with most likes', () => {
        const result = listHelper.favouriteBlog(blogs.allBlogs)
        expect(result).toEqual({
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12
          })
    })
})
