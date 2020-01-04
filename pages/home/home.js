const app = getApp()
Page({

  data: {
    movies: [
      { url: '/images/111.png' },
      { url: '/images/222.png' },
      { url: '/images/333.png' }
    ],
    recommends:[]
  },
  onLoad:function(options){
   var that=this;
   wx.request({
    url: 'http://47.97.187.33:8080/idea/load',
    data:{number:5},
    method:"POST",
    header: { "content-type": "application/x-www-form-urlencoded"},
    success: function (res) {
     console.log(res)
     const recommends=res.data.data;
     that.setData({
       recommends:recommends
     })
   }
})  
}

})
