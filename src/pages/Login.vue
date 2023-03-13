<template>
  <div class="login">
    <el-button
      type="primary"
      @click="dialogFormVisible = true"
      class="loginButton"
      >点击进行登录</el-button
    >
    <el-dialog
      title="系统登录"
      :visible.sync="dialogFormVisible"
      center
      width="30%"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        :label-position="labelPosition"
        label-width="100px"
      >
        <el-form-item label="用户账号" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >登 录</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户账号", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
        ],
      },
      dialogFormVisible: false,
      labelPosition: "right",
    };
  },
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center; /* 主轴居中 */
  margin-top: 50px;
}
</style>