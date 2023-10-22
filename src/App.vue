<script setup>
import r from '@/utils/request.js'
const count = ref(1)

r.get('/user?ID=12345').then((result) => {
  console.log('result :>> ', result);
}).catch((err) => {
  console.error(err);
});
</script>

<template>
  <RouterView />
  <n-button @click="count++">{{ count }}</n-button>
</template>

<style scoped></style>
