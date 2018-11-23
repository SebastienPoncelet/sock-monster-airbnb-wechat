const app = getApp()
const apiURL = app.globalData.host
const AV = require('../../utils/av-weapp-min.js');

// pages/booking/booking.js
Page({

  /**
   * Page initial data
   */
  data: {
    date: '2018-09-01',
  },

  // Date Picker
  bindDateChange: function (e) {
    console.log('picker: date choosen', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  // New Booking Submission
  bindSubmit: function (e) {
    this.setData({
      loading: !this.data.loading
    });

    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1500
    });

    var dates = e.detail.value.dates
    // need to get the current machine's id

    let userInfo = app.globalData.userInfo
    let userId = app.globalData.userId
    console.log("userInfo", userInfo)
    console.log(dates)

    let booking = {
      user_id: userId,
      machine_id: machine_id,
      price: price,
      status: "pending",
      dates: dates
    }

    console.log("booking", booking)
    // Get api data
    wx.request({
      url: `https://sock-monster.herokuapp.com/api/v1/machines`,
      method: 'POST',
      data: { booking },
      success(res) {
        console.log(res)
        // set data on main & show
        wx.reLaunch({
          url: '/pages/profile/profile?id=${data}'
        });
      }
    });

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(3, options)
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

  }
})