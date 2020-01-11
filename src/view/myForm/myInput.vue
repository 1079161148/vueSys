<template>
  <div class="my-input-box">
     <!-- 维护数据 双向绑定 :value  抛出事件@input $attrs展开属性-->
     <input :type="type" :value="value" @input="onInput" @blur="blur" v-bind="$attrs">
  </div>
</template>

<script>
export default {
    inheritAttrs: false, // 避免设置到根元素上 如placeholder属性
    props:{
        value:{
            type: String,
            default: ''
        },
        type:{
            type: String,
            default: 'text'
        }
    },
    data(){
        return {

        }
    },
    methods:{
        onInput(e){
            // 派发事件出去
            this.$emit('input', e.target.value);
            // 通知校验
            // this.$parent.$emit('validate') // 方式一 造成高耦合 注意留下层级问题(单级的是这样)
            this.dispatch('myFormItem','validate')
        },
        blur(){
           // 通知校验
           // this.$parent.$emit('validate') // 注意留下层级问题(单级的是这样) 
           this.dispatch('myFormItem','validate')
        }
    }
}
</script>

<style>

</style>