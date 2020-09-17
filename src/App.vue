<template>
<div class="wrapper">

  <header>
    <h1>header</h1>

    <div class="container">
      <nav class="navbar">
        <div class="navbar-content">
          <div class="logo">Users-CRM</div>
          <ul class="navbar-list">
            <!-- получаем данные из массива и рендерим их в список с помощью дерективы v-for -->
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <router-link
                class="navbar-link"
                :title="link.title"
                :to="link.url">
                  {{  link.title}}
                </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <router-view></router-view>

  <footer></footer>

</div>
</template>

<script>

export default {
  data() {
    return {
      // создаём массив с содержимым ссылок
      links: [
        {title: 'Home', url: '/'},
        {title: 'Users', url: '/Users'}
      ]
    }
  },
}
</script>

<style lang="scss">
  .navbar-link {
    &.router-link-exact-active {
      color: #5247e7;
    }
  }
</style>
