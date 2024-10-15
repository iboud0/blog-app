<template>
    <div class="p-8">
      <h1 class="text-2xl font-bold mb-4">Posts with tag: {{ tag }}</h1>
      <div v-if="filteredPosts.length > 0" class="space-y-4">
        <div v-for="post in filteredPosts" :key="post.id" class="bg-white shadow-md rounded-lg p-4">
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p class="text-gray-600">{{ post.body }}</p>
          <router-link :to="{ name: 'PostDetail', params: { id: post.id } }" class="text-blue-500 hover:underline">
            Read more
          </router-link>
        </div>
      </div>
      <div v-else>
        <p>No posts found for this tag.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { getPosts } from '@/composables/getPosts'; // Assuming you have a getPosts composable
  
  export default {
    setup() {
      const route = useRoute();
      const tag = route.params.tag; // Get the tag from the route params
      const filteredPosts = ref([]);
  
      onMounted(async () => {
        const posts = await getPosts(); // Fetch all posts
        filteredPosts.value = posts.filter(post => post.tags.includes(tag)); // Filter posts by tag
      });
  
      return { tag, filteredPosts };
    }
  };
  </script>
  