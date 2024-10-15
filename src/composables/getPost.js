// Json-server

// export const getPost = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:3000/posts/${id}`);
//       return await response.json();
//     } catch (err) {
//       console.error(err);
//     }
//   };

import { db } from '@/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export const getPost = async (id) => {
  try {
    const docRef = doc(db, 'posts', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log('No such document!');
    }
  } catch (err) {
    console.error('Error fetching post:', err);
  }
};