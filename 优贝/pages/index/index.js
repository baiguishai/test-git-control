//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name: "惠州市优贝健康管理有限公司",
    sevpic:[
      {
        img:"../images/sev1.jpg",
        tit:"宁静北欧",
        en:"PEACEFUL NORTHERN EUROPE"
      },
      {
        img: "../images/sev2.jpg",
        tit: "北海道之恋",
        en: "LOVE OF HOKKAIDO"
      },
      {
        img: "../images/sev3.jpg",
        tit: "北海道之恋",
        en: "LOVE OF HOKKAIDO"
      },
      {
        img: "../images/sev4.jpg",
        tit: "休息区",
        en: "REST AREA"
      },
      {
        img: "../images/sev5.jpg",
        tit: "婴儿车",
        en: "THE PRAM"
      },
      {
        img: "../images/sev6.jpg",
        tit: "瑜伽室",
        en: "YOGA ROOM"
      },
      {
        img: "../images/sev7.jpg",
        tit: "宁静北欧",
        en: "LOVE OF HOKKAIDO"
      },
      {
        img: "../images/sev8.jpg",
        tit: "北海道之恋",
        en: "LOVE OF HOKKAIDO"
      },
      {
        img: "../images/sev9.jpg",
        tit: "北海道之恋",
        en: "LOVE OF HOKKAIDO"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
