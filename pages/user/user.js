// pages/user/user.js
const app = getApp()
Page({

  data: {
    name:'',
    head:'',
    intro:''
  },

  onLoad: function (options) {
    var that=this;
    if (app.globalData.userid!=null)
    {
      console.log(app.globalData.userid)
      wx.request({
        url: 'http://47.97.187.33:8080/user/getById',
        data:{
          id: app.globalData.userid
        },
        method:"POST",
        header: { "content-type": "application/x-www-form-urlencoded" },
        success: function (res) {
          console.log(res)
          const name = res.data.name;
          const head = "data:image/png;base64,"+res.data.head;
          const intro = res.data.introduction
          that.setData({
            name:name,
            head:head,
            intro: intro
          })
        }
      })
    }
  },

})