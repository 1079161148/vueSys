<template>
  <div class="my-form-item-box">
     <!-- 执行校验、显示错误信息 -->
     <!-- label -->
     <label v-if="lableName">{{lableName}}</label>
     <!-- 内容分发插槽 -->
     <slot></slot>
     <!-- 校验信息显示区域 -->
     <p v-if="error" style="color:red">{{error}}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: 'myFormItem',
  componentName: 'myFormItem', // 必须 方式二 
  inject: ['form'],
  props:{
    lableName: {
      type: String,
      default: ''
    },
    prop:{
      type: String,
    }
  },
    data(){
        return {
          error: '', // error为空证明数据校验通过
        }
    },
    mounted(){
      this.$on("validate", () => {
        this.validate();
      });
      //方式二  派发通知myForm
      if (this.prop){
        this.dispatch('myForm', 'ks.form.addField',[this])
      }
    },
    methods:{
      validate(){
        console.log(this.form,'表单对象')
        // 规则
        const rules = this.form.rules[this.prop];
        // 当前值
        const value = this.form.model[this.prop];
        // 校验描述对象
        const desc = {[this.prop]:rules}
        // 创建  Checkrule 实例
        const schema = new Schema(desc);
        return schema.validate({ [this.prop]: value }, errors => {
          if (errors) {
            this.error = errors[0].message;
          } else {
            // 校验通过
            this.error = "";
          }
        });
      }
    }
}
</script>

<style>

</style>