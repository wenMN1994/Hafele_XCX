// pages/me/me.js
const util = require('../../utils/util');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password: null,
    username: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 获取用户名
  getUsername: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取密码
  getPassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登陆操作
  loginClick: function (e) {
    app.globalData.hafelUserInfo = { username: this.data.username, password: this.data.password }
    if (app.globalData.hafelUserInfo.username == 'admin' && app.globalData.hafelUserInfo.password == 'admin') {
      util.showSuccess('登录成功');
      wx.redirectTo({
        url: '../home/home',
      })
    }
    else {
      util.showModel('登录失败', '账户或密码错误');
      this.setData({
        username: app.globalData.hafelUserInfo.username
      })
    }
  }
})