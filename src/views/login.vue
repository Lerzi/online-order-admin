<script setup>
import { apiLogin } from '@/api/login'
const formValue = ref({
  username: '',
  password: ''
})

const rules = ref({
  username: {
    required: true,
    message: "请输入姓名",
    trigger: "blur"
  },
  password: [{
    required: true,
    message: "请输入密码",
    trigger: "blur",
  }]
})
const formRef = ref()
function login() {
  formRef.value?.validate((errors) => {
    if (!errors) {
      apiLogin(formValue.value)
    } else {
      console.log(errors);
      window.$message.error("Invalid");
    }
  });

}
</script>

<template>
  <div flex w-full h-full justify-center items-center>

    <div w-72>

      <n-form ref="formRef" :model="formValue" :rules="rules" size="large">
        <n-form-item label="用户名" path="username">
          <n-input v-model:value="formValue.username" placeholder="输入用户名" />
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input v-model:value="formValue.password" placeholder="输入密码" />
        </n-form-item>
      </n-form>
      <n-button @click="login" block type="primary">登录</n-button>

    </div>

  </div>
</template>

