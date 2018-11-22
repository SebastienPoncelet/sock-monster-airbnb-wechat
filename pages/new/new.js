// pages/new/new.js

const app = getApp()
const apiURL = app.globalData.host

// Calling the av-weapp-min.js file which is Leancloud's SDK


Page({

  //Choose Image Function

  chooseImage() {
    wx.chooseImage({
      count: 1, // Default 9
      sizeType: ['compressed'], // Can specify whether it is the original or compressed image, both have defaults
      sourceType: ['album', 'camera'], // Can specify whether the source is an album or camera, both have defaults
      success: function (res) {
        // Returns the local file path list for the selected photo, tempFilePath can be used as the img tag's src attribute to display the image
        var tempFilePaths = res.tempFilePaths
      }
    })

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
    var image = e.detail.value.image;
    var description = e.detail.value.description;
    var address = e.detail.value.address;
    var socks = e.detail.value.socks;
    var price = e.detail.value.price;
    var availability = e.detail.value.availability

    let userInfo = app.globalData.userInfo
    let userId = app.globalData.userId
    console.log("userInfo", userInfo)

    let machine = {
      "name": name,
      user_id: userId,
      "image": image,
      "description": description,
      "location": address,
      "sock_count": socks,
      "price": price,
      "availability": availability
   }

    console.log("machine", machine)
    // Get api data
    wx.request({
      url: `https://sock-monster.herokuapp.com/api/v1/machines`,
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
  data: {

  },

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