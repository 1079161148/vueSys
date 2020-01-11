<template>
  <div class="father-box">
    <div>我是父组件</div>
    <son1 />
    <son2 />
    <div>
      <h3>组件通讯的几种方式总结：</h3>
      <div>1、provide/inject传值（祖辈/深层嵌套传值都行/高阶组件传值）</div>
    </div>
  </div>
</template>

<script>
import son1 from "./son1";
import son2 from "./son2";
export default {
  components: {
    son1,
    son2
  },
  provide() {
    return {
      provideMsg: "provide深度传值"
    };
  },
  data() {
    return {
      msg: "父组件直接传字符串",
      obj: {
        name: "小明学代码",
        age: 29
      },
      list: [
        { name: "苹果", price: 1 },
        { name: "梨", price: 2 },
        { name: "香蕉", price: 3 }
      ]
    };
  },
  methods: {

  }
};
</script>

<style>
</style>