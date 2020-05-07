const listHelper = require('../utils/list_helper')
const blogs = require('./blogarray')

// ei vielä valmista ..

describe('adding users', () => {
    test('username must be unique', () => {
        const result = listHelper.dummy(blogs)
        expect(result).toBe(1)
    })
})