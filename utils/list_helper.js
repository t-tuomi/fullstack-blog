const dummy = (blogs) => {
    return 1
}

const favouriteBlog = (blogs) => {
    if (blogs.length === 0) return 0
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
    return blogs.map(o => o.likes).reduce((a, v) => a + v) 
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
}
