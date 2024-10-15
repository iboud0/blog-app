<template>
  <div class="space-y-6 mt-6">
    <SinglePost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import SinglePost from './SinglePost.vue';
import { getPosts } from '@/composables/getPosts';

export default {
  components: { SinglePost },
  setup() {
    const posts = ref([]);

    onMounted(async () => {
      posts.value = await getPosts();
    });

    return { posts };
  }
};
</script>
