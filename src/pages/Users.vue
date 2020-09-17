<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- table -->
        <table>

          <!-- thead -->
          <thead>
            <tr >
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>

          <tbody>
          <tr v-for="user in users" :key="user.id.value">
            <td>
              <img :src="user.picture.medium" :alt="user.name.first + ' ' + user.name.last">
              <span>{{ user.name.first }} {{ user.name.last }}</span>
            </td>
            <td>{{ user.dob.age }}</td>
            <td>{{ user.gender }}</td>
          </tr>
        </tbody>
        </table>

      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    axios
      .get('https://randomuser.me/api/?results=15&inc=id,picture,name,dob,gender')
        .then(response => {
          console.log(response.data.results)
          this.users = response.data.results
        })
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