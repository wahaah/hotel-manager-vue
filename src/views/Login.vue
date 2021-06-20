<template>
  <div class="mainBox">
    <canvas id="particle-canvas" width="760" height="685"></canvas>
    <div class="login">
         <h3 class="loginTitle">Z民宿管理系统</h3>
         <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="40px" class="demo-ruleForm">
            <el-form-item label="账号" prop="loginId">
                <el-input type="text" v-model="ruleForm.loginId" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="loginPwd">
                <el-input type="password" v-model="ruleForm.loginPwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="checkMe">
                <el-checkbox v-model="ruleForm.checkMe">记住我</el-checkbox>
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
import {startAni} from '../assets/js/loginBg'
export default {
  // 
  mounted() {
    startAni()
  },
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
          loginPwd: '',
          checkMe: false
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
              let {token,success,message}  = await this.$get('/Admin/Login',this.ruleForm)
              // console.log(token);
              // 自动登录---
              localStorage.setItem("loginId",this.ruleForm.loginId)
              if (success) {
                // 记住我为true 将密码存起来
              if(this.ruleForm.checkMe){
                localStorage.setItem("loginPwd",this.ruleForm.loginPwd)
              }
              // 自动登录---

              // 登陆成功后 将token身份验证信息存储起来
              // 通常将token存储在浏览器的缓存机制  webstorage  cookie
              // cookie 太小  sessionstorage仅在绘画中有效，随浏览器关闭而删除  localstorage会一直存在，除非手动删除
              sessionStorage.setItem('token',token)
              this.$getToken();  // 将token信息放到请求头中
               // 登陆成功后每次请求数据需要将token带过去
               // 一般将token以请求头的方式传到后台 在request.js中  headers: {'X-Custom-Header': 'foobar'}
            

              let res = await this.$get('/Room/List',{id:123})
              console.log(res)
              this.$router.push('/layout')
            }else {
               this.$msg_e(message,1000,true)
            }
           
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
<style lang="css" scoped>
  @font-face{
  font-family: cfs;
  src:url('../assets/font/fa-brands-400.ttf'); 
   /* // 找到你自己的字体文件地址 */
}
	
  #particle-canvas {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, rgb(10, 10, 50) 0%,rgb(60, 10, 60) 100%);
    vertical-align: middle;
  }
  .mainBox {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      position: relative;  
  }
  .login {
          position: absolute;
          z-index: 99;
          width: 500px;
          height: 280px;
          padding: 25px;
          border: 1px solid #eee;
          border-radius: 6px;
  }
  .loginTitle {
            text-align: center;
            color: #ffffff;
            font-size: 16px;
            margin: 20px;
  }
</style>