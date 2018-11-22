// pages/new/new.js

const app = getApp()
const apiURL = app.globalData.host
const AV = require('../../utils/av-weapp-min.js');

// Calling the av-weapp-min.js file which is Leancloud's SDK


Page({

  data: {
    date: '2018-09-01',
    fileUrl: ""
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
        let tempFilePath = res.tempFilePaths[0];
        console.log(tempFilePath)
        wx.showToast({
          title: 'uploading..',
          icon: 'loading',
          duration: 10000,
          mask: true,
        })
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save().then(
          file => {
            wx.hideToast()
            wx.showToast({
              title: 'uploaded',
              icon: 'success',
              image: '',
              duration: 2000,
              mask: true,
            })
            console.log(file.url())
            that.data.fileUrl = file.url()
          }
        ).catch(console.error);
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
    var photo = this.data.fileUrl;
    console.log(photo);
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
      url:'http://localhost:3000/api/v1/machines', 
      // `https://sock-monster.herokuapp.com/api/v1/machines`,
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