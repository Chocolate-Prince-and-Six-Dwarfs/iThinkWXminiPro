const app = getApp()

Page({

  data: {
    name:'',
    content:''
  },

  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://47.97.187.33:8080/capsule/getById',
      data: { id: app.globalData.userid },
      method: "POST",
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: function (res) {
        console.log(res)
        const name = res.data.data.name;
        const content = res.data.data.content;
        that.setData({
          name:name,
          content:content,
        })
      }
    })  
  },

  
})