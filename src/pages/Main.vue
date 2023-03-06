<template>
  <div>
    <el-container>
      <el-aside width="180px">
        <navigation></navigation>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: { Navigation },
  name: "Main",
};
</script>

<style>
</style>