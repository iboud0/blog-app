<template>
  <div class="mt-8">
    <h3 class="text-lg font-bold mb-4 ml-4">Tags</h3>
    <div class="flex flex-wrap gap-2 ml-4">
      <router-link 
        v-for="tag in tags" 
        :key="tag" 
        :to="{ name: 'PostsByTag', params: { tag } }" 
        class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-200">
        {{ tag }}
      </router-link>
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
