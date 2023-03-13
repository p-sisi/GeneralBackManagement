<template>
  <!-- 头部下面的tag标签 -->
  <div class="tag">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      effect="dark"
      :closable="item.name !== 'home'"
      :effect="item.name === $route.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "RouteTag",
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    ...mapMutations(["CLOSETAG"]),
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    // 点击tag删除功能
    handleClose(item, index) {
      // 调用store中的mutation
      this.CLOSETAG(item);
      const length = this.tags.length;
      // 删除之后的跳转逻辑
      if (item.name !== this.$route.name) {
        return;
      }
      // 表示的是删除的最后一项
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tag {
  margin-left: 20px;
  margin-top: 10px;
  .el-tag {
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>