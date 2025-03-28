<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/appointment">Book Appointment</router-link>
    </nav>
    <router-view /> <!-- This is where pages will load -->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
nav {
  display: flex;
  gap: 15px;
  padding: 10px;
  background: #333;
}
nav a {
  color: white;
  text-decoration: none;
}
</style>

