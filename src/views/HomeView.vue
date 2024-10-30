<template>
    <div class="container mx-auto p-4">
      <SearchBar v-model="searchTerm" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <template v-if="loading">
          <SkeletonLoader v-for="n in 6" :key="n" />
        </template>
        <template v-else>
          <NewsCard 
            v-for="article in articles" 
            :key="article.url"
            :article="article"
            @article-read="markAsRead"
          />
        </template>
      </div>
  
      <ReadArticles :articles="readArticles" />
    </div>
  </template>
  
  <script>
  import { API_KEY, BASE_URL } from '../config';
  import debounce from 'lodash/debounce';
  import SearchBar from '../components/SearchBar.vue';
  import NewsCard from '../components/NewsCard.vue';
  import SkeletonLoader from '../components/SkeletonLoader.vue';
  import ReadArticles from '../components/ReadArticles.vue';
  
  export default {
    components: {
      SearchBar,
      NewsCard,
      SkeletonLoader,
      ReadArticles
    },
    data() {
      return {
        articles: [],
        loading: true,
        searchTerm: '',
        readArticles: [],
        page: 1,
        pageSize: 12
      }
    },
    watch: {
      searchTerm() {
        this.debouncedSearch()
      }
    },
    created() {
      const stored = localStorage.getItem('readArticles')
      if (stored) {
        this.readArticles = JSON.parse(stored)
      }
      
      this.fetchNews()
      this.debouncedSearch = debounce(this.fetchNews, 500)
    },
    methods: {
      async fetchNews() {
        this.loading = true
        try {
          let url = this.searchTerm
            ? `${BASE_URL}/everything?q=${this.searchTerm}&apiKey=${API_KEY}&page=${this.page}&pageSize=${this.pageSize}`
            : `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}&page=${this.page}&pageSize=${this.pageSize}`
  
          const response = await fetch(url)
          const data = await response.json()
          
          if (data.status === 'ok') {
            this.articles = data.articles
          } else {
            console.error('API Error:', data.message)
            this.articles = []
          }
        } catch (error) {
          console.error('Error fetching news:', error)
          this.articles = []
        } finally {
          this.loading = false
        }
      },
      markAsRead(article) {
        const readArticle = {
          title: article.title,
          url: article.url,
          urlToImage: article.urlToImage
        }
        
        if (!this.readArticles.find(a => a.url === article.url)) {
          this.readArticles.push(readArticle)
          localStorage.setItem('readArticles', JSON.stringify(this.readArticles))
        }
      }
    }
  }
  </script>