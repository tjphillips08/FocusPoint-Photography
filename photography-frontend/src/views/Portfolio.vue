<template>
    <div>
      <h1>Photography Portfolio</h1>
      <div class="gallery">
        <img v-for="image in images" :key="image.id" :src="image.url" :alt="image.title" />
      </div>
    </div>
  </template>
  
  <script>
  import { fetchImages } from "@/services/api";
  
  export default {
    data() {
      return { images: [] };
    },
    async created() {
      const response = await fetchImages();
      this.images = response.data;
    },
  };
  </script>
  
  <style scoped>
  .gallery img {
    width: 200px;
    height: auto;
    margin: 10px;
  }
  </style>
  