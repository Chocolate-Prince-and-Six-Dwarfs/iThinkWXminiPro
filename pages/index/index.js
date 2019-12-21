//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    userN: '',
    passW: ''
  },
  userNameInput: function (e) {
    this.setData({
      userN: e.detail.value
    })
  },
  passWordInput: function (e) {
    this.setData({
      passW: e.detail.value
    })
  },
  loginBtnClick: function (a) {
    var that = this
    if (this.data.userN.length == 0 || this.data.passW.length == 0) {
      wx.showModal({
        title: '温馨提示：',
        content: '用户名或密码不能为空！',
        showCancel: false
      })
    } else {
      db.collection('abc'[数据表名]).where({ username: that.data.userN }).get({
        success: function (res) {

          if (that.data.passW == res.data[0].password) {
            wx.redirectTo({
              url: '/pages/index/index'//[主页面]
            })
          }
          else {
            wx.showModal({
              title: '密码错误',
              content: '密码错误'//session中用户名和密码不为空触发
            });
          }
        }
      })
    }
  }
})
