<template>
  <div class="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold mb-6">Create a New Post</h1>
    <form @submit.prevent="createPost" class="space-y-4">
      <input v-model="title" type="text" placeholder="Post Title" class="w-full p-3 border border-gray-300 rounded-lg" />
      <textarea v-model="body" placeholder="Post Body" class="w-full p-3 border border-gray-300 rounded-lg"></textarea>
      <input v-model="tags" type="text" placeholder="Tags (comma separated)" class="w-full p-3 border border-gray-300 rounded-lg" />
      <button type="submit" class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500">Add Post</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: '',
      tags: ''
    };
  },
  methods: {
    async createPost() {
      const post = {
        title: this.title,
        body: this.body,
        tags: this.tags.split(',').map(tag => tag.trim())
      };

      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      });

      this.$router.push('/');
    }
  }
};
</script>
