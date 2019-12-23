const TOKEN = 'token'

App({
  globalData:{
    token:''
  },
  onLaunch: function () {
    //云开发初始化
    /*wx.cloud.init({
      env: 'test-gffeg' ,
      traceUser: true
    }),*/


   /* //先从缓存中取token进行验证，若取不出则需要登陆
    const token = wx.getStorageSync(TOKEN)

    if(token && token.length !=0){
      //表示token存在，只需验证token是否过期
      this.check_token(token)
    }
    else{
      //没有token，进行登陆
      this.login()
    }*/
    
 
  },


  //检查token是否过期
check_token(token){

},
  //登陆
login(){
    wx.login({
      //code只有5分钟有效期，所以需要快速把code发给服务器
      success: (res) => {
        console.log(res)
        //获取并保存code
        const code = res.code;

        //将code发送给服务器
        wx.request({
          url: 'http://localhost:8080/user/login',
          data: {
            code: code
          },
          method:'POST',
          success: (res) => {
            console.log(res)
            //获取并保存token
            const token = res.data.token;

            //将token保存在globaldata种
            this.globalData.token = token;
            console.log(this.globalData.token)

            //将token进行本地存储
            wx.setStorage(TOKEN, token)
          }
        })

      }
    })
  }
})