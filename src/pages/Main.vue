<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <navigation></navigation>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <!-- 路由跳转展示界面 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Header from "../components/Header";

export default {
  name: "Main",
  components: { Navigation, Header },
};
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
}
</style>