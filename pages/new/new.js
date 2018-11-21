// pages/new/new.js
Page({

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
    var socks = e.detail.value.socks

    let machine = {
      name: name,
      image: image,
      description: description,
      address: address,
      socks: socks
    }

    console.log(machine)
    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/machines`,
      method: 'POST',
      data: machine,
      success() {
        // set data on main & show
        wx.redirectTo({
          url: '/pages/main/main'
        });
      }
    });

  }

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