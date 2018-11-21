//index.js
var app = getApp()

Page({
  data: {
    machines : {}
  },
  onLoad: function (options) {

    // Display toast when loading
    wx.showToast({
      title: 'Updating',
      icon: 'success',
      duration: 3000
    });

    // Update local data
    this.setData(app.globalData)
  },

  showMachine: function(e) {
    console.log(1, e)
    const data = e.currentTarget.dataset.id;
    console.log(1, data)

    wx.navigateTo({
      url: `../show/show?id=${data}`
    });
  },

  onLoad: function (options) {
    // Save reference to page
    let page = this;


    // Get api data
    wx.request({
      url: "https://sock-monster.herokuapp.com/api/v1/machines",
      method: 'GET',
      success(res) {
        console.log("je reçois les data de l'API res", res)
        const machines = res.data.machines;
        // Update local data
        page.setData({
          machines: machines
        });

        wx.hideToast();
      }
    });
  }
})