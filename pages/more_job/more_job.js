// pages/more_job/more_job.js
var jobJsonData = require('../../data/job_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  // 工作详情
  job_details: function (e) {
    console.log(e)
    var arrayIndex = e.currentTarget.id;
    console.log(arrayIndex)
    // 把要传递的json对象转换成字符串
    var jobDetails = JSON.stringify(this.data.JobDataList[arrayIndex]);
    wx.navigateTo({
      url: '/pages/job_details/job_details?jobDetails=' + jobDetails
   });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      JobDataList: jobJsonData.JobDataList
    });
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

  }
})