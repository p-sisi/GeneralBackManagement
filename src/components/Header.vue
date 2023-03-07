<template>
  <div class="header-regin">
    <div class="l-header">
      <el-button icon="el-icon-menu" size="small"></el-button>
      <!-- 面包屑 -->
      <span>首页</span>
    </div>
    <div class="r-header">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="../assets/avatar.png" />
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item
          ><el-dropdown-item disabled>设置</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
.header-regin {
  position: relative;
  height: 60px;
  background-color: #333333;

  .l-header {
    position: absolute;
    color: aliceblue;
    top: 50%;
    margin-top: -15.5px;
    margin-left: 25px;
    span {
      margin-left: 23px;
    }
  }
  .r-header {
    float: right;
    position: relative;
    img,
    i {
      position: absolute;
      width: 40px;
      border-radius: 50%;
      top: 50%;
      margin-top: -7px;
      right: 40px;
    }
    i {
      right: -2px;
      top: 17px;
    }
  }
}
// 下拉菜单样式
.el-dropdown-link {
  cursor: pointer;
  color: aliceblue;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-icon-arrow-down[data-v-61dd7a3d] {
  font-size: 14px;
}
</style>