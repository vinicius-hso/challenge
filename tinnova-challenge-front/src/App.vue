<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="https://tinnova.com.br/wp-content/uploads/2021/05/logo_dark.png" width="214" height="75" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/veiculos">Veículos</RouterLink>
        <RouterLink to="/adicionar-veiculo">Adicionar</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  top: 0;
  /* align-items: center;
  text-align: center; */
  /* justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999px; */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    display: flex;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
