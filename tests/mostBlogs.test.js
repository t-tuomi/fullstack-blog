const listHelper = require('../utils/list_helper')
const blogs = require('./blogarray')

describe('test name', () => {
    test('', () => {
        const result = listHelper.dummy(blogs)
        expect(result).toBe(1)
    })
})