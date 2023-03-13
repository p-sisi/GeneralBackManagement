<template>
  <el-row>
    <el-col :span="8">
      <!-- 用户信息 -->
      <el-card>
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
      <el-card class="tableInfo">
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column prop="name" label="商品"> </el-table-column>
          <el-table-column
            v-for="(val, key) in tableLabel"
            :prop="key"
            :label="val"
            sortable
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 右边区域 -->
    <el-col :span="16">
      <!-- 订单概况部分 -->
      <div class="numInfo">
        <el-card
          class="num"
          v-for="item in countData"
          :key="item.id"
          :body-style="{ display: 'flex' }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="priceInfo">
            <p class="price">{{ item.value }}</p>
            <p class="name">{{ item.name }}</p>
          </div>
        </el-card>
      </div>

      <!-- 折线图 -->
      <el-card class="lineChart">
        <div ref="echarts1"></div>
      </el-card>
      <div class="chart">
        <!-- 柱状图 -->
        <el-card style="height: 260px">
          <div ref="echarts2" style="height: 260px"></div>
        </el-card>
        <!-- 饼状图 -->
        <el-card style="height: 260px">
          <div ref="echarts3" style="height: 260px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import avatarImg from "../assets/avatar.png";
import { getData } from "../api";
import * as echarts from "echarts";

export default {
  name: "Home",
  data() {
    return {
      avatarImg: avatarImg,
      tableData: [],
      tableLabel: {
        dayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付的订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日支付的订单",
          value: 1234,
          icon: "star-on",
          color: "#e6a673",
        },
        {
          name: "今日支付的订单",
          value: 1234,
          icon: "s-goods",
          color: "#56abe6",
        },
        {
          name: "今日支付的订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日支付的订单",
          value: 1234,
          icon: "star-on",
          color: "#e6a673",
        },
        {
          name: "今日支付的订单",
          value: 1234,
          icon: "s-goods",
          color: "#56abe6",
        },
      ],
    };
  },
  mounted() {
    getData().then(({ data }) => {
      const { tableData, orderData, userData, videoData } = data.data;
      this.tableData = tableData;

      //基于准备好的DOM，初始化echarts实例
      const echarts1 = echarts.init(this.$refs.echarts1);
      // 图表尺寸自适应
      window.onresize = function () {
        echarts1.resize();
      };
      var echarts1Option = {};
      //处理数据
      const xAxis = Object.keys(orderData.data[0]);
      //x轴显示内容
      echarts1Option.xAxis = {
        data: orderData.date,
      };
      //y轴显示内容
      echarts1Option.yAxis = {};
      //标题提示信息
      echarts1Option.legend = {
        data: xAxis,
      };
      //当鼠标放上去的时候显示提示信息
      (echarts1Option.tooltip = {
        trigger: "axis",
      }),
        //数据及显示样式等
        (echarts1Option.series = []);
      xAxis.forEach((key) => {
        echarts1Option.series.push({
          name: key,
          data: orderData.data.map((item) => item[key]),
          type: "line",
        });
      });

      //使用刚指定的配置项和数据显示图表
      echarts1.setOption(echarts1Option);

      //柱状图
      const echarts2 = echarts.init(this.$refs.echarts2);
      window.onresize = function () {
        echarts2.resize();
      };
      const eacharts2Option = {
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: userData.map((item) => item.date),
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        series: [
          {
            name: "新增用户",
            data: userData.map((item) => item.new),
            type: "bar",
          },
          {
            name: "活跃用户",
            data: userData.map((item) => item.active),
            type: "bar",
          },
        ],
      };
      echarts2.setOption(eacharts2Option);

      // 饼状图
      const echarts3 = echarts.init(this.$refs.echarts3);
      window.onresize = function () {
        echarts3.resize();
      };
      const echarts3Option = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [
          {
            type: "pie",
            data: videoData,
            radius: "50%",
          },
        ],
      };
      echarts3.setOption(echarts3Option);
    });
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
//订单列表
.numInfo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .num {
    /deep/.el-card__body {
      padding: 0;
    }
    width: 30%;
    padding: 0px;
    margin-bottom: 20px;
    margin-left: 20px;
    .icon {
      width: 90px;
      height: 90px;
      font-size: 30px;
      color: aliceblue;
      text-align: center;
      line-height: 90px;
    }
    .priceInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 0 0 10px;
      .price {
        font-size: 30px;
      }
      .name {
        color: #a1a1a1;
      }
      p {
        margin: 0px;
      }
    }
  }
}

// 折线图
.lineChart {
  margin-left: 20px;
  height: 280px;
  div {
    height: 280px;
  }
}
.chart {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 20px;
  .el-card {
    width: 48%;
  }
}
</style>