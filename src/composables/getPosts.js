export const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts');
      return await response.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  };
  