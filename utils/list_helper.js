const dummy = (blogs) => {
    return 1
}

const favouriteBlog = (blogs) => {
    if (blogs.length === 0) return {}
    const sorted = blogs.sort((a, b) => b.likes - a.likes)
    return {
        title: sorted[0].title, 
        author: sorted[0].author,
        likes: sorted[0].likes
    }
}

const totalLikes = (blogs) => {
    if (blogs.length === 0) return 0;
    if (blogs.length === 1) return blogs[0].likes 
    return blogs.map(o => o.likes).reduce((a, v) => a + v, 0) 
}

const mostBlogs = (blogs) => {

    // lodash _countBy:llä varmaan, mutta jos koittaa ilman lodash:ia, niin
    if (blogs.length === 0) return 0;

    return blogs.map(o => { 
        return { 
            author: o.author, 
            blogs: (blogs.filter(a => (a.author == o.author)).length )
        }
    })
    .sort((a, b) => b.blogs - a.blogs)[0]
}

const mostLikes = (blogs) => {
    return  blogs.map(o => {       
        return { 
            author: o.author, 
            likes: blogs.filter(a => (a.author == o.author))
                        .reduce((a, c) => a + c.likes, 0)      
        }
    })
    .sort((a, b) => b.likes - a.likes)[0]   // tai joku max()

}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog, 
    mostBlogs,
    mostLikes
}
