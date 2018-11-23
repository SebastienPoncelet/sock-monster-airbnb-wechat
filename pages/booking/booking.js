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
  bindDateChange: function(e) {
    console.log('picker: date choosen', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  // New Booking Submission
  bindSubmit: function(e) {
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
    console.log("userInfo booking", userInfo)
    console.log(dates)

    let booking = {
      user_id: userId,
      machine_id: machine_id,
      price: price,
      status: "pending",
      dates: dates
    }

  },
    // Get api data


    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
      console.log(options)
      let that = this;
      this.id = options.id
      console.log("machine booking id", this.id)
      // Get api data
      wx.request({
        url: `https://sock-monster.herokuapp.com/api/v1/machines/${this.id}`,
        method: 'GET',
        success(res) {
          console.log("data from heroku in booking", res)
          const machine = res.data.machine;


          // Update local data
          that.setData(
            machine
          );
          wx.hideToast();
        }
      });
    },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  },

  /** confirmation modal pop up */
  confirmation: function() {
    wx.showModal({
      title: 'Congratulations!',
      content: 'Your request has been sent to {username}',
      confirmText: "Ok",
      showCancel: false,
      success: function(res) {
        console.log('success');
        wx.reLaunch({
          url: '../../pages/main/main'
        })
      }
    })
  }

})