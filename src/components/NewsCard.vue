<template>
  <div class="bg-white rounded-lg shadow-2xl border border-black overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <a 
      :href="article.url" 
      target="_blank"
      @click="handleReadArticle"
      class="block"
    >
      <img 
        :src="article.urlToImage || '/placeholder-image.jpg'" 
        :alt="article.title"
        @error="handleImageError"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <div class="flex items-center text-sm text-gray-500 mb-2">
          <span>{{ article.source?.name || 'Unknown Source' }}</span>
          <span class="mx-2">•</span>
          <span>{{ article.author || 'Unknown Author' }}</span>
        </div>
        <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
        <p class="text-gray-600 mb-4">{{ article.description }}</p>
        <div class="flex items-center text-sm text-gray-500 mb-4">
          <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ formatDate(article.publishedAt) }}
        </div>
        

        <button 
          @click.stop="saveArticle" 
          class="px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded hover:bg-blue-700 hover:text-white transition-colors"
        >
          Save news
        </button>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
      const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                     'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
      
      return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getHours().toString().padStart(2, '0')}.${date.getMinutes().toString().padStart(2, '0')}`
    },
    handleImageError(e) {
      e.target.src = '/placeholder-image.jpg'
    },
    handleReadArticle() {
      this.saveArticle()
      this.$emit('articleRead', this.article)
    },
    saveArticle() {
      const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || []
      const articleData = {
        title: this.article.title,
        url: this.article.url,
        urlToImage: this.article.urlToImage || '/placeholder-image.jpg'
      }
      
      // Tambah artikel jika belum ada di daftar
      if (!savedArticles.some(a => a.url === articleData.url)) {
        savedArticles.push(articleData)
        localStorage.setItem('savedArticles', JSON.stringify(savedArticles))
        alert("Berita berhasil disimpan!")
      } else {
        alert("Berita sudah disimpan sebelumnya.")
      }
    }
  }
}
</script>
