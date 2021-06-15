<template>
  <div class="mainBox">
    <div class="login">
         <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="loginId">
                <el-input type="text" v-model="ruleForm.loginId" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="loginPwd">
                <el-input type="password" v-model="ruleForm.loginPwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>
<script>

export default {
  data() {
      var validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          // if (this.ruleForm.checkPass !== '') {
          //   this.$refs.ruleForm.validateField('loginId');
          // }
          callback();
        }
      };
      
      return {
        ruleForm: {
          loginId: '',
          loginPwd: ''
        },
        rules: {
          // 验证密码
          loginPwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          // 验证账号
          loginId: [
            { validator: validateAccount, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.$get('/Admin/Login',this.ruleForm)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style lang="scss" scoped>
  .mainBox {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      .login {
          width: 400px;
          height: 260px;
          padding: 25px;
          border: 1px solid #eee;


      }
  }
</style>