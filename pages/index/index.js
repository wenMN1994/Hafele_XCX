//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    arry: [

      { src: "../../images/job-3.jpg", text: "五金工程师 Project Engineer" },

      { src: "../../images/job-2.jpg", text: "LED灯项目工程师" },

      { src: "../../images/job-1.jpg", text: "产品工程师 Product Engineer" },

      { src: "../../images/job-4.jpg", text: "产品工程师-宁波办事处 Product Engineer" },

    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onPullDownRefresh: function () {
    wx.request({
      url: '#',
      data: {},
      method: 'GET',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) {
        wx.stopPullDownRefresh();
      }
    })
  },

  // 更多工作
  more_job:function(){
    wx.navigateTo({
      url: '/pages/more_job/more_job'
    });
  },

  // 工作详情
  job_details: function(e) {
    console.log(e)
    var job_title = e._relatedInfo.anchorRelatedText;
    console.log(job_title)
    wx.navigateTo({
      url: '/pages/job_details/job_details?job_title=' + job_title
   });
  },

  // 地图
  map: function () {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = 22.483364
        const longitude = 113.929183
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
