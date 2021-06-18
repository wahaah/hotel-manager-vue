<template>
  <div id class="layout">
    <div class="con">
      <div class="left" :style="{backgroundColor:themeColor,width:isCollapse?'200px':'auto'}">
        <div class="logo">logo</div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :background-color="themeColor"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          :collapse-transition="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-collection"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item index="1-1">角色管理</el-menu-item>
            <el-menu-item index="1-2">账号管理</el-menu-item>
             <!-- <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
           
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-office-building"></i>
              <span slot="title">客房管理</span>
            </template>
            <el-menu-item index="2-1">类型管理</el-menu-item>
            <el-menu-item index="2-2">客房管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span slot="title">客户管理</span>
            </template>
            <el-menu-item index="3-1">客户管理</el-menu-item>
          </el-submenu>
          <el-submenu index="4" disabled>
            <template slot="title">
              <i class="el-icon-lock"></i>
              <span slot="title">权限管理</span>
            </template>
            <el-menu-item index="4-1">权限管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="right">
        <div class="nav"  :style="{backgroundColor:themeColor}">
          <div class="icon" @click="isCollapse=!isCollapse">
            <i class="isCollapse?el-icon-s-fold:el-icon-s-unfold"></i>
          </div>
          <div class="menu">
            <!-- <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="rgb(51, 74, 95)"
              text-color="#fff"
              active-text-color="#ffd04b"
            > -->
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            :background-color="themeColor"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
              <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                 Home
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-message"></i>
                  Message
                </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu  index="3">
                <template slot="title">
                  <i class="el-icon-magic-stick"></i>
                  Theme
                </template>
                <el-menu-item @click="changeColor(item.color)" v-for="(item,i) in theme" :key="i" :index="item.color">{{item.title}}</el-menu-item>
                <!-- <el-menu-item index="3-2">粉色主题</el-menu-item>
                <el-menu-item index="3-3">黑色主题</el-menu-item> -->
              </el-submenu >
              <el-menu-item index="4">
                <i class="el-icon-user"></i>管理员
              </el-menu-item>
            </el-menu>
          </div>
        </div>
        <div class="content">con</div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入vuex的映射函数
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isCollapse: false,
      activeIndex: "1",
      activeIndex2: "1",
      themeColor:"rgb(51, 74, 95)"
    };
  },
  computed:{
    ...mapState('theme',['theme'])
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        // alert(bgcolor)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // }
      changeColor(newColor) {
        this.themeColor = newColor
      }
  }
};
</script>

<style lang='scss' scoped>

$bg-color:rgb(51, 74, 95);
.con {
  width: 100vw;
  height: 100vh;
  display: flex;

  .left {
    /* // width: 15%; */
    /* width: 200px; */
    /* background-color: $bg-color; */
    .logo {
      color: #fff;
      margin: 10px 20px;
      border: 1px solid #fff;
      height: 38px;
      line-height: 40px;
      text-align: center;
    }
  }
  .right {
    flex: 1;
    .nav {
      height: 60px;
      /* background-color: $bg-color; */
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      .icon {
        font-size: 20px;
        color: #fff;
        line-height: 60px;
      }
    }
    .content {

    }
  }
}
</style>