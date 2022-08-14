<script setup>
  import { mainStore } from '../store/index'
  const store = mainStore()
</script>

<template>
  {{ store.msg }}
</template>

<style scoped>
a {
  color: aqua;
}
</style>
