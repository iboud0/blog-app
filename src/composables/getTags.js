// Json-server

// export const getTags = async () => {
//     try {
//       // Fetch all posts
//       const response = await fetch('http://localhost:3000/posts');
//       const posts = await response.json();
      
//       // Extract tags from each post and ensure uniqueness
//       const tags = posts.flatMap(post => post.tags || []); // Flatten all tags into one array
//       const uniqueTags = [...new Set(tags)]; // Remove duplicate tags
  
//       return uniqueTags;
//     } catch (err) {
//       console.error(err);
//     }
//   };

import { db } from '@/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const getTags = async () => {
  try {
    const tags = [];
    
    // Fetch all posts from Firestore
    const querySnapshot = await getDocs(collection(db, 'posts'));
    
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      tags.push(...(post.tags || [])); // Add all tags from the post, or an empty array if no tags
    });

    // Ensure uniqueness of tags
    const uniqueTags = [...new Set(tags)];
    
    return uniqueTags;
  } catch (err) {
    console.error('Error fetching tags:', err);
  }
};

  