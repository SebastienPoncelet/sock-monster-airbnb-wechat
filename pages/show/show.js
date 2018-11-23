// var app = getApp()
// const apiURL = app.globalData.host
// const AV = require('../../utils/av-weapp-min.js');
// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  showBooking: function (e) {
    const id = e.target.dataset.machineid;
    console.log("data from show machine", id)

    wx.navigateTo({
      url: `../booking/booking?id=${id}`
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    let that = this;
    this.id = options.id
    console.log("machine id", this.id)
    // Get api data
    wx.request({
       url: `https://sock-monster.herokuapp.com/api/v1/machines/${this.id}`,
      method: 'GET',
      success(res) {
        console.log("data from heroku", res)
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
  onReady() {
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