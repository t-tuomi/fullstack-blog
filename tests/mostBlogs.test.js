const listHelper = require('../utils/list_helper')
const blogs = require('./blogarray')

describe('author with most blogs', () => {
    test('return author with the gretest number of blogs', () => {
        const result = listHelper.mostBlogs(blogs.allBlogs)
        expect(result).toEqual({
            author: "Robert C. Martin",
            blogs: 3
          })
    })
})