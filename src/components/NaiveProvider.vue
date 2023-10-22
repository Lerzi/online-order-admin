<script setup>
import { useMessage } from 'naive-ui'
import { defineComponent } from 'vue'

// content
const NaiveProviderContent = defineComponent({
  setup() {
    window.$message = useMessage()
    console.log('window.$message :>> ', window.$message);
  },
  render() {
    return h('div');
  }
})
</script>

<template>
  <n-message-provider>
    <slot></slot>
    <NaiveProviderContent></NaiveProviderContent>
  </n-message-provider>
</template>
