<template>
    <div class="read-news-list">
      <h2 class="text-2xl font-semibold mb-4">Berita yang Pernah Dibaca</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(article, index) in readArticles" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
          <a :href="article.url" target="_blank" class="block">
            <img :src="article.urlToImage" alt="Article Image" class="w-full h-48 object-cover" />
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
        readArticles: []
      }
    },
    mounted() {
      this.loadReadArticles()
    },
    methods: {
      loadReadArticles() {
        const savedArticles = JSON.parse(localStorage.getItem('readArticles')) || []
        this.readArticles = savedArticles
      }
    }
  }
</script>
  