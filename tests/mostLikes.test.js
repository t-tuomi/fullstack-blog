const listHelper = require('../utils/list_helper')
const blogs = require('./blogarray')

describe('author with the most cumulative likes', () => {
    test('return author with the greates sum of all writen blogs', () => {
        const result = listHelper.mostLikes(blogs.allBlogs)
        expect(result).toEqual({
            author: "Edsger W. Dijkstra",
            likes: 17
          })
    })
})