//index.js
//获取应用实例
const app = getApp()

import request from '../../utils/util.js'

Page({
  data: {
    email: '',
    pwd: '',
  },
  //处理userNameInput的触发事件
  userNameInput: function (e) {
    var user_email = e.detail.value;//从页面获取到用户输入的用户名/邮箱/手机号
    if (user_email != '') {
      this.setData({ email: user_email });//把获取到的密码赋值给全局变量Date中的password
    }
  },

  //处理passWordInput的触发事件
  passWordInput: function (e) {
    var password = e.detail.value;//从页面获取到用户输入的密码
    if (password != '') {
      this.setData({ pwd: password });//把获取到的密码赋值给全局变量Date中的password
    }
  },

  //处理按钮点击事件
  loginBtnClick: function (a) {
    console.log("点击按钮!" + "获取到的用户名:" + this.data.email + "获取到的密码:" + this.data.pwd)
    var that=this;
    wx.request({
      url: 'http://localhost:8080/user/wxlogin',//后面详细介绍
      //定义传到后台的数据
      data: {
        //从全局变量data中获取数据
        email: that.data.email,
        pwd: that.data.pwd,
      },
      method: 'POST',//定义传到后台接受的是post方法还是get方法
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log("调用API成功");
        console.log("回调函数:" + res.data)
        console.log(res);
        if (res.data == true) {
          wx.showToast({
            title: '登陆成功',
          })
        }
        else {
          wx.showModal({
            title: '登陆失败',
            content: '用户名或者密码错误',
            showCancel: false
          })
        }
      },
      fail: function (res) {
        console.log("调用API失败");
      }
    })
    //用封装的request请求
    //request({
    //  url: 'http://47.97.187.33:8080/user/login'
    //}).then(res =>{
    //  console.log(res)
    //}).catch(err =>{
    //  console.log(err)
    //})
  }
})
