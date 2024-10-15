<template>
  <div class="p-8 max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Add a New Post</h1>
    <form @submit.prevent="createPost">
      <div class="mb-4">
        <label for="title" class="block text-lg font-semibold mb-2">Title</label>
        <input 
          v-model="title" 
          id="title" 
          type="text" 
          class="w-full p-2 border border-gray-300 rounded" 
          required
        />
      </div>
      <div class="mb-4">
        <label for="body" class="block text-lg font-semibold mb-2">Body</label>
        <textarea 
          v-model="body" 
          id="body" 
          class="w-full p-2 border border-gray-300 rounded" 
          required>
        </textarea>
      </div>
      <div class="mb-4">
        <label for="tags" class="block text-lg font-semibold mb-2">Tags (comma separated)</label>
        <input 
          v-model="tags" 
          id="tags" 
          type="text" 
          class="w-full p-2 border border-gray-300 rounded" 
        />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig'; // Import Firestore instance

export default {
  setup() {
    const title = ref('');
    const body = ref('');
    const tags = ref('');

    const createPost = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value.split(',').map(tag => tag.trim()), // Split the tags by commas
        createdAt: new Date()
      };
      
      try {
        await addDoc(collection(db, 'posts'), post); // Add the post to the Firestore collection
        window.location.href = '/'; // Redirect to home after adding
      } catch (err) {
        console.error('Failed to add post:', err);
      }
    };

    return { title, body, tags, createPost };
  }
};
</script>
