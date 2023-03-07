<template>
  <div>
    <el-row class="tac">
      <el-col class="menu-wrapper">
        <div class="title">通用后台管理系统</div>
        <el-menu
          router
          :default-active="activeRouter"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/home">
            <i class="el-icon-s-home"></i>
            <span slot="title"> 首页</span>
          </el-menu-item>
          <el-menu-item index="mall">
            <i class="el-icon-shopping-bag-2"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="user">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>其他</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="other1">页面1</el-menu-item>
              <el-menu-item index="other2">页面2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      activeRouter: "",
    };
  },
  mounted() {
    //获取地址栏中的路由，设置element-ui中的导航栏选中状态
    this.activeRouter = window.location.pathname;
  },
};
</script>

<style lang="less" scoped>
.menu-wrapper {
  overflow: hidden;
}
.title {
  background-color: #545c64;
  color: #fff;
  width: 180px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.el-menu {
  height: 100vh;
  border-right: 0px;
}
</style>