    // pages/new/new.js

const app = getApp()
const db = wx.cloud.database()
// Calling the av-weapp-min.js file which is Leancloud's SDK


Page({
    data: {
    },

// Date Picker
  bindDateChange: function (e) {
    console.log('picker: date choosen', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  //Choose Image Function

  takePhoto: function () {
    let that = this
    wx.chooseImage({
      count: 1,
      sizeType: [ 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log("log res from take photo",res)
        var photoPath = res.tempFilePaths[0]
        console.log("log tempPath", photoPath)
       wx.cloud.uploadFile({
         cloudPath: `${Date.now()}-${Math.floor(Math.random(0, 1) * 10000000)}`, 
        filePath: photoPath,
         success: res => {
           console.log("success",res)
           that.setData({
             fileID: res.fileID});
            console.log("cloud id to store",that.data.fileID)
          },
          fail: console.error
        })
      }
    });
  },

  
  // New Machine Submission
  bindSubmit: function (e) {
    this.setData({
      loading: !this.data.loading
    });

    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1500
    });

 

    var name = e.detail.value.name;
    // var image = e.detail.value.image;
    var photo = this.data.fileID;
    console.log("store in photo variable",photo);
    var description = e.detail.value.description;
    var address = e.detail.value.address;
    var socks = e.detail.value.socks;
    var price = e.detail.value.price;
    var availability = e.detail.value.availability 

    let userInfo = app.globalData.userInfo
    let userId = app.globalData.userId
    console.log("userInfo", userInfo)
    console.log(availability)

    let machine = {
      "name": name,
      user_id: userId,
      // "image": image,
      "photo": photo,
      "description": description,
      "location": address,
      "sock_count": socks,
      "price": price,
      "availability": availability
   }

    console.log("machine", machine)
    // Get api data
    wx.request({
      url:`https://sock-monster.herokuapp.com/api/v1/machines`,
      method: 'POST',
      data: {machine},
      success(res) {
        console.log(res)
        // set data on main & show
        wx.reLaunch({
          url: '/pages/main/main'
        });
      }
    });

  },
 
  /**
   * Page initial data
   */
 
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  


})