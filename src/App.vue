<script setup>


const count = ref(1)
</script>

<template>
  <RouterView />
  <n-button @click="count++">{{ count }}</n-button>
</template>

<style scoped></style>
