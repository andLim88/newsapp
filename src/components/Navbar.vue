<template>
    <nav class="bg-gray-800 text-white">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-xl font-bold">NewsApp</router-link>
          </div>
          <div class="flex gap-2 items-center">
            <router-link to="/" class="px-3 py-2 rounded-md hover:bg-gray-700">Home</router-link>
            <router-link to="/saved" class="px-3 py-2 rounded-md hover:bg-gray-700">Bookmarks</router-link>
          </div>
        </div>
      </div>
    </nav>
</template>