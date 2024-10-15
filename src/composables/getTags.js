export const getTags = async () => {
    try {
      // Fetch all posts
      const response = await fetch('http://localhost:3000/posts');
      const posts = await response.json();
      
      // Extract tags from each post and ensure uniqueness
      const tags = posts.flatMap(post => post.tags || []); // Flatten all tags into one array
      const uniqueTags = [...new Set(tags)]; // Remove duplicate tags
  
      return uniqueTags;
    } catch (err) {
      console.error(err);
    }
  };
  