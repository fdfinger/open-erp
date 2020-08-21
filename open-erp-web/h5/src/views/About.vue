<template>
  <div class="about">
    <h1>这是一个简单的页面</h1>
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