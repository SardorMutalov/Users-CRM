<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- table -->
        <table>

          <!-- thead -->
          <thead>
            <tr >
              <th @click="sort('name')">Name</th>
              <th @click="sort('age')">Age</th>
              <th @click="sort('gender')">Gender</th>
            </tr>
          </thead>

          <!-- tbody -->
          <tbody>
          <tr v-for="user in usersSort" :key="user.id">
            <td>
              <img :src="user.picture.medium" :alt="user.name">
              <span>{{ user.name }}</span>
            </td>
            <td>{{ user.age }}</td>
            <td>{{ user.gender }}</td>
          </tr>
        </tbody>
        </table>

        <!-- debug -->
        <p>debug: sort: {{ currentSort }}, dir: {{ currentSortDir }}</p>

      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: [],
      currentSort: 'name',
      currentSortDir: 'asc'
    }
  },
  created() {
    axios
      .get('http://localhost:3000/list')
        .then(response => {
          console.log(response.data)
          this.users = response.data
        })
  },
  computed: {
    usersSort () {
      return this.users.sort((a, b) => {
        let mod = 1
        if (this.currentSortDir === 'desc') mod = -1
        if (a[this.currentSort] < b[this.currentSort]) return -1 * mod
        if (a[this.currentSort] > b[this.currentSort]) return 1 * mod
        return 0
      })
    }
  },
  methods: {
    sort (e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = e
    }
  },
}
</script>

<style lang="scss" scoped>
  img {
    width: 60px;
    height: auto;
    border-radius: 50%;
    margin-right: 16px;
  }
</style>