<template>
  <div class="my-form-box">
      <!-- 指定数据、校验规则 -->
        <!-- 内容分发插槽 -->
     <slot></slot>
  </div>
</template>

<script>
export default {
 name: 'myForm',
  componentName: 'myForm', // 必须
    provide(){
        return {
            form:  this
        }
    },
    props:{
        model:{
            type: Object,
            required: true
        },
        rules:{
            type: Object, 
        }
    },
    data(){
        return {
            fields: []
        }
    },
    created(){
        this.$on('ks.form.addField',item => {
            this.fields.push(item)
        })
        // 删除
    },
    methods:{
        validate(cb) {
        // 获取所有孩子FormItem
        // [resultPromise]
        // const tasks = this.$children
        //     .filter(item => item.prop) // 方式一 过滤掉没有prop属性的Item
        //     .map(item => item.validate());
        const tasks = this.fields.map(item => item.validate());
        console.log(tasks,'tasks')
        // 统一处理所有Promise结果
        Promise.all(tasks)
            .then(() => cb(true))
            .catch(() => cb(false));
        }
    }
}
</script>

<style>

</style>