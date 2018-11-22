//app.js

const app = getApp()

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