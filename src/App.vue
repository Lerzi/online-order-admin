<script setup>
const count = ref(1)

axios.get('/user?ID=12345').then((result) => {
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
