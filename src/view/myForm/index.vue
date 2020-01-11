<template>
  <div class="form-compoents-box">
    <h3>自定义表单通用组件</h3>
    <myForm :model="myForm" :rules="rules" ref="loginForm">
      <myFormItem lableName="用户名" prop="name">
        <myInput v-model="myForm.name" placeholder="请输入用户名"></myInput>
      </myFormItem>
      <myFormItem lableName="密码" prop="password">
        <myInput type="password" v-model="myForm.password" placeholder="请输入密码"></myInput>
      </myFormItem>
      <myFormItem>
        <button @click="login">登录</button>
      </myFormItem>
    </myForm>
  </div>
</template>

<script>
import myForm from "./myForm";
import myFormItem from "./myFormItem";
import myInput from "./myInput";
export default {
  components: {
    myForm,
    myFormItem,
    myInput
  },
  data() {
    return {
        myForm: {
             name: '',
             password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        }
    };
  },
  methods: {
    login() {
      this.$refs["loginForm"].validate(valid => {
        // const notice = this.$create(Notice, {
        //   title: "社会你杨哥喊你来搬砖",
        //   message: valid ? "请求登录!" : "校验失败!",
        //   duration: 2000
        // });
        // notice.show();
        if (valid) {
          alert("submit");
        } else {
          console.log("error submit!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
</style>