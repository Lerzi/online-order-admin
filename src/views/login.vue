<script setup>
import { apiLogin } from '@/api/login'
// import lIcon from '@/assets/login-icon.svg'
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
  <div flex w-full h-full>
    <!-- 左边颜色块 -->
    <div class="w-1/2" h-full bg-primary>

      <!-- 放SVG图标 -->
    </div>

    <!-- 右边表单块 -->
    <div class="w-1/2" flex h-full justify-center items-center>
      <!-- 控制表单大小 -->
      <div w-83>
        <!-- 登录标题 -->
        <div text-3xl mb-8>登录</div>
        <!-- 标签置左属性 label-placement="left"-->
        <n-form ref="formRef" :model="formValue" :rules="rules" size="large" label-placement="left">
          <n-form-item path="username">
            <n-input v-model:value="formValue.username" placeholder="输入用户名" />
          </n-form-item>
          <n-form-item path="password">
            <n-input v-model:value="formValue.password" placeholder="输入密码" />
          </n-form-item>
        </n-form>
        <n-button @click="login" block type="primary">登录</n-button>
      </div>
    </div>
  </div>
</template>

