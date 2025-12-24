const dummy = (blogs) => {
  // ...
  return 1
}


const totalLikes = (blogs) => {

    if (!blogs || blogs.length === 0) {return 0}
    
    const result = blogs.reduce((sum, blog) => sum + blog.likes, 0)

    console.log("miresultado es " + result)

    return result

}


const favoriteBlog = (blogs) => {
 
  if (blogs.length === 0) {
    return null;
  }

  const maxLikes = Math.max(...blogs.map(blog => blog.likes));
  const favorite = blogs.find(blog => blog.likes === maxLikes);

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes

  };

}


const mostBlogs = (blogs) => {

  if (blogs.length === 0) {
    return null;
  }

  const authors = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + 1;
    return acc;
  }, {});

  const maxBlogs = Math.max(...Object.values(authors));
  const mostProlificAuthor = Object.keys(authors).find(author => authors[author] === maxBlogs);

  return {
    author: mostProlificAuthor,
    blogs: maxBlogs
  };



}


const mostLikes = (blogs) => {


    if (blogs.length === 0) {
      return null;
    }

    const authors = blogs.reduce((acc, blog) => {
      acc[blog.author] = (acc[blog.author] || 0) + blog.likes;
      return acc;
    }, {});

    const maxLikes = Math.max(...Object.values(authors));
    const mostLikedAuthor = Object.keys(authors).find(author => authors[author] === maxLikes);

    return {
      author: mostLikedAuthor,
      likes: maxLikes
    };


  // ...
}



module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}