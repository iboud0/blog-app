<template>
  <div>
    <PostList />
    <!-- Pass the fetched unique tags to TagCloud -->
    <TagCloud :tags="tags" />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
import { ref, onMounted } from 'vue';
import { getTags } from '@/composables/getTags'; // Import getTags composable

export default {
  components: {
    PostList,
    TagCloud
  },
  setup() {
    const tags = ref([]);

    // Fetch tags when the component is mounted
    onMounted(async () => {
      tags.value = await getTags(); // Fetch and set the unique tags
    });

    return { tags };
  }
};
</script>
