<template>
  <div class="mt-8 ml-4"> <!-- Added ml-4 for left margin -->
    <h3 class="text-lg font-bold mb-4">Tags</h3>
    <div v-if="tags.length > 0" class="flex flex-wrap gap-2">
      <router-link 
        v-for="tag in tags" 
        :key="tag" 
        :to="`/tags/${tag}`" 
        class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-200">
        {{ tag }}
      </router-link>
    </div>
    <div v-else>
      <p>No tags available</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>
