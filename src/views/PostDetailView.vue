<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div v-if="post" class="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-600 mb-6">{{ post.body }}</p>
      <router-link to="/" class="text-blue-500 hover:underline">Back to Home</router-link>
    </div>
    <div v-else>
      <p>Loading post...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'; // Import useRoute to access route params
import { getPost } from '@/composables/getPost';

export default {
  setup() {
    const post = ref(null); // Initialize post as null
    const route = useRoute(); // Use useRoute to access route params

    const postId = route.params.id; // Get the post ID from the route parameters

    onMounted(async () => {
      try {
        post.value = await getPost(postId); // Fetch the post using its ID
      } catch (err) {
        console.error('Failed to fetch post:', err);
      }
    });

    return { post };
  }
};
</script>
