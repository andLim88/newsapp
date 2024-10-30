<template>
    <div class="mb-6 lg:max-w-[800px] mx-auto">
      <div class="relative">
        <input 
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          type="text"
          placeholder="Search news..."
          class="w-full p-2 pl-12 rounded-lg border border-black focus:outline-none focus:border-blue-500"
        />
        <svg 
          class="absolute left-4 top-3 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      modelValue: {
        type: String,
        default: ''
      }
    }
  }
</script>