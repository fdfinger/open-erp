<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="ready">准备</button>
  </div>
</template>


<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('wx', ['ready'])
  }
}
</script>