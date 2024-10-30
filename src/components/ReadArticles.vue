<template>
  <div class="mt-8">
    <h2 class="text-2xl font-bold mb-4">Recently Read Articles</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div 
        v-for="article in articles" 
        :key="article.url"
        class="bg-white border border-black shadow-2xl rounded-lg overflow-hidden"
      >
        <a :href="article.url" target="_blank">
          <img 
            :src="article.urlToImage || '/placeholder-image.jpg'" 
            :alt="article.title"
            @error="handleImageError"
            class="w-full h-24 object-cover"
          />
          <div class="p-2 border-t border-black">
            <p class="text-sm font-medium truncate">{{ article.title }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleImageError(e) {
      e.target.src = '/placeholder-image.jpg'
    }
  }
}
</script>