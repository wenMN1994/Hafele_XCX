//index.js
//获取应用实例
const app = getApp()

var jobJsonData = require('../../data/job_data.js');

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    slidshows:[
      { "slidshow": "../../images/slidshow4.jpg" },
      { "slidshow": "../../images/slidshow3.jpg" },
      { "slidshow": "../../images/slidshow1.jpg" },
      { "slidshow": "../../images/slidshow2.jpg" }
    ]
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
    var arrayIndex = e.target.id;
    console.log(arrayIndex)
    // 把要传递的json对象转换成字符串
    var jobDetails = JSON.stringify(this.data.JobDataList[arrayIndex]);
    wx.navigateTo({
      url: '/pages/job_details/job_details?jobDetails=' + jobDetails
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

  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '0755-26856100' // 仅为示例，并非真实的电话号码
    })
  },

  onLoad: function () {
    this.setData({
      JobDataList: jobJsonData.JobDataList
    });
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
