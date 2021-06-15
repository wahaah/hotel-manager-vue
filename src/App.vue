<template>
  <div id="app">
    
    <router-view></router-view>
    <!-- <router-view/> -->
  </div>
</template>

<style lang="scss">
// 先写常用的样式 上面不能加scoped 要给其他组件也用

*{
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
  text-decoration: none;
}
.flex {
  display: flex;
}
.j-c {
  justify-content: center;
}
.j-s {
  justify-content: space-between;
}
.a-c {
  align-items: center;
}
</style>
