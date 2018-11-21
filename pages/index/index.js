//index.js
//获取应用实例
const app = getApp()

Page({
  goMachine() {
    console.log("goMachine globalData", app.globalData)
    wx.navigateTo({
      url: '/pages/new/new',
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    let userInfo = e.detail.userInfo
    app.globalData.userInfo = userInfo
    this.setData({
      userInfo: userInfo
    })
    // wx.setStorage({
    //   key: 'userInfo',
    //   data: userInfo,
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
  }
})
