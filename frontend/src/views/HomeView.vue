<script lang="ts" setup>
// import axios from 'axios'
// import { ref } from 'vue'

// let users = ref([])
// axios
//   .get('http://localhost:3000/users')
//   .then((res) => {
//     users.value = res.data
//   })
//   .catch((e) => {
//     console.log(e)
//   })
</script>

<template>
  <nav style="width: 100%; padding: 15px; display: flex; justify-content: center; align-items: center;" class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" style="margin-right: 1000px; margin-left: 150px;">E-HOTEL</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sign Up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sign In</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="wrapper">

    <h1>E-HOTEL</h1>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

h1 {
  font-family: sans-serif;
}
</style>
