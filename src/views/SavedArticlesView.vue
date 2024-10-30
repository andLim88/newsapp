<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-semibold mb-6">Saved News</h1>
      
      <div v-if="savedArticles.length === 0" class="text-gray-600">
        You dont have any saved news
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(article, index) in savedArticles" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
          <a :href="article.url" target="_blank" class="block">
            <img :src="article.urlToImage || '/placeholder-image.jpg'" alt="Article Image" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold">{{ article.title }}</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        savedArticles: []
      }
    },
    created() {
      this.loadSavedArticles()
    },
    methods: {
      loadSavedArticles() {
        const storedArticles = JSON.parse(localStorage.getItem('savedArticles')) || []
        this.savedArticles = storedArticles
      }
    }
  }
</script>
  