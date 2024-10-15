export const getPost = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`);
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  };
  