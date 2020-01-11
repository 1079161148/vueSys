export default {
    render(h) {
      // 标记当前router0view的深度
      this.$vnode.data.routerView = true;
      let depth = 0;
      let parent = this.$parent;

      while (parent){
        const vnodeData = parent.$vnode && parent.$vnode.data
        if (vnodeData){
          if(vnodeData.routerView){
            // 说明当前的parents 是个routerView
            depth++;
          }
        }
        parent = parent.$parent;
      }
      //获取path对应的component 单层
      // const {routeMap, currentUrl} = this.$router;
      // console.log(routeMap,'routeMap',currentUrl,'currentUrl');
      
      let component = null;
      const route = this.$router.matched[depth];
      if(route){
        component = route.component;
      }
      return h(component)
    }
  }