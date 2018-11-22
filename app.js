//app.js

const app = getApp()
// Calling the av-weapp-min.js file which is Leancloud's SDK
const AV = require('./utils/av-weapp-min.js')
// Separate files to save app_Id and app_key as recommended in tutorial
const config = require('./key1')
const config = require('./key2')

// Initialization of the app
AV.init({
  appId: config.appId,
  appKey: config.appSecret,
});

App({

  onLaunch: function () {
    // app.status = function () {
    //   console.log("status", globalData)
    // }

    const host = 'https://sock-monster.herokuapp.com/'
    console.log('processing to login')
    wx.login({
      success: (res) => {
        console.log(res)
        
        wx.request({
          url: host + 'login',
          method: 'post',
          data: {
            code: res.code
          },
          
          success: (res) => {
            console.log("login info", res)
            this.globalData.userId = res.data.userId
          }


        })

      }
    })
  },
  globalData: {
    host: "https://sock-monster.herokuapp.com/api/v1/"
    // host: ""
  }
  
})