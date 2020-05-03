const dummy = (blogs) => {
    return 1
}


const totalLikes = (blogs) => {
    if (blogs.length === 0) return 0;
    if (blogs.length === 1) return blogs[0].likes 
    return blogs.map(o => o.likes).reduce((a, v) => a + v) 
}

module.exports = {
    dummy,
    totalLikes
}
