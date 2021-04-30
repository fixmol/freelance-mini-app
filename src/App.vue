<template>
  <header class="navbar">
    <p>Freelance Service</p>
    <ul class="navbar-menu">
      <li><router-link to="/tasklist">Все задачи</router-link></li>
      <li><router-link to="/tasknew">Создать задачу</router-link></li>
    </ul>
  </header>

  <div class="container">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  
}
</script>


<style>

</style>
