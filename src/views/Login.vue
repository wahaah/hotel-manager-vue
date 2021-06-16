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
import {strToMd5} from '../utils/md5'
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
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            this.ruleForm.loginPwd = strToMd5(this.ruleForm.loginPwd)
            let {message,token,success}  = await this.$get('/Admin/Login',this.ruleForm)
            console.log(token);
            if(success){
              // 登陆成功后 将token身份验证信息存储起来
              // 通常将token存储在浏览器的缓存机制  webstorage  cookie
              // cookie 太小  sessionstorage仅在绘画中有效，随浏览器关闭而删除  localstorage会一直存在，除非手动删除
              sessionStorage.setItem('token',token)
              this.$getToken();  // 将token信息放到请求头中  
              let res = await this.$get('/Room/List',{id:123})
              console.log(res)
            }
            // 登陆成功后每次请求数据需要将token带过去
            // 一般将token以请求头的方式传到后台 在request.js中  headers: {'X-Custom-Header': 'foobar'}
          
          } else {
            console.log('error submit!!');
            return false;
          }
        })
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