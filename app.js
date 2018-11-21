//app.js

const app = getApp()

App({

  onLaunch: function () {
    // app.status = function () {
    //   console.log("status", globalData)
    // }

    const host = 'http://localhost:3000/'
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
    host: "http://localhost:3000/api/v1/"
    // host: ""
  }
  
})