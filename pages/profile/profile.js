// pages/profile/profile.js

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置


Page({

  /**
   * Page initial data
   */
  data: {
    tabs: ["My Reservations", "My Bookings"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    booking: {
      "id": 1,
      "status": "Pending",
      "price": 56,
      "user_id": 1,
      "machine_id": 1,
      "machine": {
        "name": "Des Buratto"
      },
      "user": {
        "first_name": "Reyes Altenwerth"
      }
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    // Get api data
    wx.request({
      url: `https://sock-monster.herokuapp.com/api/v1/users/${options.id}`,
      method: 'GET',
      success(res) {
        const machine = res.data;

        // Update local data
        that.setData(
          machine
        );
        wx.hideToast();
      }
    });
  },

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  // onLoad: function (options) {

  //   let that = this;

  //   // Get api data
  //   wx.request({
  //     url: `https://sock-monster.herokuapp.com/api/v1/users/${options.id}`,
  //     method: 'GET',
  //     success(res) {
  //       const machine = res.data;

  //       // Update local data
  //       that.setData(
  //         machine
  //       );
  //       wx.hideToast();
  //     }
  //   });
  // },

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

  // Pull down the trigger event
  onPullDownRefresh() {
    // Stop the dropdown refresh
    wx.stopPullDownRefresh()
  }, 
  
  requested: function (e) {
    console.log("machine id", this.id);
    console.log(1, e)
    const id = e.target.dataset.machineid;
    console.log("data from show machine", id)

    wx.navigateTo({
      url: `../request/request?id=${id}`
    });
  },




})