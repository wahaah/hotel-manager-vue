<template>
  <div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  async created(){
      let loginId = localStorage.getItem("loginId");
      let loginPwd = localStorage.getItem("loginPwd");
      if(!loginId||!loginPwd){
          this.$router.push("/login")
      }else {
           let {success,token}  =  await this.$get('/Admin/Login',{loginId,loginPwd})
            if(success){
                // 重新保存token 
              sessionStorage.setItem('token',token)
              this.$getToken();  // 将token信息放到请求头中
                this.$router.push('/layout')
            }else{
                this.$router.push('/login')
            }
      }
   
  }
}
</script>
<style lang="css" scoped>
  
</style>