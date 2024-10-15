// Json-server

// export const getPosts = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/posts');
//     return await response.json();
//   } catch (err) {
//     console.error(err);
//   }
// };

import { db } from '@/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const getPosts = async () => {
  const posts = [];
  
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    return posts;
  } catch (err) {
    console.error('Error fetching posts:', err);
  }
};
