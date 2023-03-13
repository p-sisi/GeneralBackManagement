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
          <!-- 没有子菜单的导航栏 -->
          <el-menu-item
            v-for="item in noChildren"
            :key="item.name"
            :index="item.name"
            @click="clickMenu(item)"
          >
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
          </el-menu-item>
          <!-- 有子菜单的导航栏 -->
          <el-submenu
            v-for="item in hasChildren"
            :key="item.label"
            :index="item.label"
          >
            <template slot="title">
              <i :class="`el-icon-${item.icon}`"></i>
              <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group
              v-for="subItem in item.children"
              :key="subItem.path"
            >
              <el-menu-item :index="subItem.path" @click="clickMenu(subItem)">{{
                subItem.label
              }}</el-menu-item>
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
      activeRouter: "/",
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/other1",
              name: "other1",
              label: "页面1",
              icon: "setting",
              url: "Other/Other1",
            },
            {
              path: "/other2",
              name: "other2",
              label: "页面2",
              icon: "setting",
              url: "Other/Other2",
            },
          ],
        },
      ],
    };
  },
  computed: {
    // 没有子菜单
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
  },
  methods: {
    clickMenu(item) {
      // 当页面的路由与跳转的路由不一致才允许跳转
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === "/home" && item.path === "/")
      ) {
        this.$router.push(item.path);
      }
      // 需要传入当前菜单的信息，作为参数
      this.$store.commit("SelectMENU", item);
    },
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
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.el-menu {
  height: 100vh;
  border-right: 0px;
}
</style>