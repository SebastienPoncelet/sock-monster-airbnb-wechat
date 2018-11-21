// pages/main/main.js
Page({

  /**
   * Page initial data
   */
  data: {
    machines: [{ name: "Test", price: "$5/day" }, { name: "Hey", price: "$9/day" }, { name: "Name", price: "$11/day" }, { name: "Machine", price: "$3/day" }, { name: "Hello", price: "$6/day" }
    ]
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

  goToShowPage: function () {
    wx.navigateTo({
      url: '/pages/show/show',
    })
  }
  
  //   goToAddPage: function () {
  //   wx.navigateTo({
  //     url: '/pages/add/add',
  //   })
  // }

})