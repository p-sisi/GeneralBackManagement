<template>
  <div>
    <el-row>
      <el-col :span="8">
        <!-- 用户信息 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <div class="user">
              <!-- 头像 -->
              <el-avatar :src="avatarImg" :size="100"></el-avatar>
              <!-- 信息 -->
              <div class="userinfo">
                <p class="name">Admin</p>
                <p class="access">超级管理员</p>
              </div>
            </div>
          </div>
          <div class="login-time loginInfo">
            <p>上次登录时间：</p>
            <span class="infoText">2022-7-15</span>
          </div>
          <div class="login-address loginInfo">
            <p>上次登录地点：</p>
            <span class="infoText">桂林</span>
          </div>
        </el-card>
        <!-- 表格数据 -->
        <el-card class="box-card tableInfo">
          <el-table :data="tableData" style="width: 100%" stripe>
            <el-table-column prop="goods" label="商品"> </el-table-column>
            <el-table-column
              v-for="(val, key) in tableLabel"
              :prop="key"
              :label="val"
              sortable
            ></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-row>
  </div>
</template>

<script>
import avatarImg from "../assets/avatar.png";
export default {
  name: "Home",
  data() {
    return {
      avatarImg: avatarImg,
      tableData: [
        {
          goods: "oppo",
          dayBuy: "500",
          monthBuy: "3500",
          totalBuy: 22000,
        },
        {
          goods: "vivo",
          dayBuy: "300",
          monthBuy: "2200",
          totalBuy: 24000,
        },
        {
          goods: "苹果",
          dayBuy: "800",
          monthBuy: "4500",
          totalBuy: 65000,
        },
        {
          goods: "小米",
          dayBuy: "1200",
          monthBuy: "6500",
          totalBuy: 45000,
        },
        {
          goods: "华为",
          dayBuy: "900",
          monthBuy: "7800",
          totalBuy: 95000,
        },
        {
          goods: "三星",
          dayBuy: "300",
          monthBuy: "2800",
          totalBuy: 21000,
        },
      ],
      tableLabel: {
        dayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>

<style lang="less" scoped>
/* 卡片布局样式 */
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
/* 个人信息 */
.user {
  display: flex;
  .name {
    font-size: 25px;
    padding-left: 20px;
  }
  .access {
    font-size: 10px;
    color: #a1a1a1;
    padding-left: 25px;
    margin-top: -25px;
  }
}
.infoText {
  margin-top: 16px;
  margin-left: 25px;
  color: #a1a1a1;
}
.loginInfo {
  display: flex;
  flex-direction: row;
}
.login-address {
  margin-top: -20px;
}
// 表格样式
.tableInfo {
  margin-top: 20px;
}
</style>