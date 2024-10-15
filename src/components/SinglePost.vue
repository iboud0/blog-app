<template>
  <div class="bg-white shadow-lg rounded-lg p-6">
    <h2 class="text-2xl font-semibold mb-2">{{ post.title }}</h2>
    <p class="text-gray-500 mb-4">{{ post.tags.join(', ') }}</p>
    <p class="text-gray-700 mb-4">{{ post.body.substring(0, 50) }}...</p>
    <router-link :to="`/posts/${post.id}`" class="text-blue-600 font-semibold hover:underline">Read more</router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>
