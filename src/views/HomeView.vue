<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import request from '@/utils/request'

request.get('/user?ID=12345').then((result) => {
  console.log('result :>> ', result);
}).catch((err) => {
  // console.error(err);
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
