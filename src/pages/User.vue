<template>
  <div class="user">
    <!-- 上方添加按钮、搜索功能 -->
    <div class="user_header">
      <div>
        <el-button type="primary" @click="handleAdd"> + 新增 </el-button>
      </div>

      <el-form :inline="true" :model="userForm">
        <el-form-item>
          <el-input placeholder="请输入姓名" v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表单弹窗 -->
    <el-dialog
      title="增加用户"
      :visible.sync="dialogFormVisible"
      width="50%"
      :before-close="handleClose"
    >
      <!-- 弹窗中的表单部分 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :inline="true"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="ruleForm.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="请选择">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.birth"
            value-format="yyyy-MM-DD"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input
            type="textarea"
            v-model="ruleForm.addr"
            placeholder="请输入地址"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 弹窗底部按钮 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">新 增</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </div>
    </el-dialog>
    <!-- 下方表单数据 -->
    <el-table :data="tableData" style="width: 100%" height="90%" stripe>
      <el-table-column label="姓名" width="150px">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>年龄: {{ scope.row.age }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="150px"> </el-table-column>
      <el-table-column label="性别" width="150px">
        <template slot-scope="scope">
          <span>{{ scope.row.sex == 1 ? "男" : "女" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="出生日期" width="200px">
        <template slot-scope="scope">
          <i class="el-icon-time" style="margin-right: 10px"></i>
          <span>{{ scope.row.birth }}</span>
        </template>
      </el-table-column>
      <el-table-column label="地址">
        <template slot-scope="scope">
          <span>{{ scope.row.addr }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="pager">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="handlePage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getUser, addUser, editUser, delUser } from "../api";

export default {
  name: "User",
  data() {
    return {
      // 控制新增按钮的弹窗
      dialogFormVisible: false,
      // 最后收集的表单信息
      ruleForm: {
        name: "", //姓名
        age: "", //年龄
        sex: "", //性别
        birth: "", //出生日期
        addr: "", //地址
      },
      // 每一项表单验证规则
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        age: [{ required: true, message: "请输入年龄" }],
        sex: [{ required: true, message: "请输入选择性别" }],
        birth: [{ required: true, message: "请选择出生日期" }],
        addr: [{ required: true, message: "请输入地址" }],
      },
      formLabelWidth: "120px",
      // 用户列表信息
      tableData: [],
      //新增0或是编辑1状态弹窗判断
      modalType: 0,
      total: 0, //当前的总条数
      pageData: {
        page: 1,
        limit: 9,
      },
      userForm: {
        name: "",
      },
    };
  },
  methods: {
    //弹窗关闭的时候
    handleClose() {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    //点击新增按钮逻辑
    handleAdd() {
      // if (this.$refs.ruleForm !== undefined) this.$refs.ruleForm.resetFields();
      this.modalType = 0;
      this.dialogFormVisible = true;
    },
    // 编辑用户信息
    handleEdit(row) {
      this.modalType = 1;
      this.dialogFormVisible = true;
      //需要对当前行数据进行深拷贝，否则会出错
      this.ruleForm = JSON.parse(JSON.stringify(row));
    },
    // 删除用户信息
    handleDelete(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delUser({ id: row.id }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            // 重新获取列表的接口
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //提交用户表单
    submit() {
      // 先查看表单是否校验成功
      this.$refs.ruleForm.validate((valid) => {
        //校验成功对表单数据进行处理，表单数据存在ruleForm中
        if (valid) {
          //如果是新增用户，重新获取用户列表，调用接口
          if (this.modalType === 0) {
            addUser(this.ruleForm).then(() => {
              this.getList();
            });
          } else {
            //编辑用户信状态，同样去调用编辑接口，修改了用户信息之后，重新获取列表信息
            addUser(this.ruleForm).then(() => {
              this.getList();
            });
          }
          //提交成功，关闭弹窗
          this.$refs.ruleForm.resetFields();
          this.dialogFormVisible = false;
        }
      });
    },
    //获取学生列表信息
    getList() {
      getUser({ params: { ...this.userForm, ...this.pageData } }).then(
        ({ data }) => {
          this.tableData = data.list;
          this.total = data.count || 0;
        }
      );
    },
    // 选择页码的回调函数
    handlePage(val) {
      // console.log(val, 'val')
      this.pageData.page = val;
      this.getList();
    },
    // 列表的查询
    onSubmit() {
      this.getList();
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="less" scoped>
.user {
  height: 90%;
  .user_header {
    display: flex;
    justify-content: space-between;
  }
  .el-table {
    padding: 0 20px;
  }
}
.pager {
  float: right;
  margin-top: 10px;
  margin-right: 5px;
}
</style>