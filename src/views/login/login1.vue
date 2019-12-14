<template>
  <div class="login-box">
    <!-- 表单容器 -->
    <div class="form-box">
      <!-- 标题 -->
      <div class="title-box">
        <img src="../../assets/login_logo.png" alt />
        <span class="title">黑马面面</span>
        <i></i>
        <span class="sub-title">用户登录</span>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="pass">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-user" v-model="input1"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
        <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" show-password v-model="input2"></el-input>
        </el-form-item>
         <el-form-item prop="pass">
        <el-row>
          <el-col :span="18">
            <el-input placeholder="请输入验证码" prefix-icon="el-icon-key" v-model="input3"></el-input>
          </el-col>
          <el-col :span="6">
            <img src="../../assets/login_sm.png" alt class="sm" />
          </el-col>
        </el-row>
         </el-form-item>
         <el-form-item prop="pass">
        <el-checkbox v-model="checked">
          我已阅读并同意
          <el-link type="primary">用户协议</el-link>和
          <el-link type="primary">隐私条款</el-link>
        </el-checkbox>
        <el-row>
          <el-button type="primary">登录</el-button>
        </el-row>
        <el-row>
          <el-button type="primary" @click="dialogFormVisible = true">注册</el-button>

          <!-- <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
          </el-dialog>-->
        </el-row>
        </el-form-item>
      </el-form>
    </div>

    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      checked: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>

<style lang="less">
.login-box {
  height: 100%;
  /* 开启弹性布局 */
  display: flex;
  /* 上下居中 */
  align-items: center;
  /* 左右 均分 */
  justify-content: space-around;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .form-box {
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    padding: 44px;
    box-sizing: border-box;
    // 标题
    .title-box {
      display: flex;
      align-items: center;
      img {
        width: 22px;
        height: 17px;
        margin: 16px;
      }
      .title {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin-right: 12px;
      }
      .sub-title {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
      i {
        width: 2px;
        height: 28px;
        background: #c7c7c7;
        margin-right: 12px;
      }
    }
    .el-input {
      display: flex;
      align-items: center;
      margin-top: 24px;
    }
    .sm {
      margin-top: 24px;
      height: 40px;
      width: 100%;
    }
    .el-checkbox {
      display: flex;
      align-items: center;
      margin-top: 24px;
    }
    .el-button {
      width: 100%;
      margin-top: 26px;
    }
  }
}
</style>