const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
    const blogs = []
    
    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})
//// test

//let b = [{ a: 'aa', t: 2 }, { a: 'aa', t: 3 }, { a: 'bb', t: 5 }, { a: 'bb', t: 6 }, { a: 'cc', t: 4 }, { a: 'dd dd', t: 10 }, { a: 'aa', t: 1 }]

// r=[]; b.map(i => {r.find(o => o.a === i.a) ? r.find(o => o.a === i.a).t += i.t : r.push(Object.assign({}, i)) }); r
//r.sort((a, b) => b.t - a.t)[0]

// bar bar bar
// bar bar bar
// bar bar bar
