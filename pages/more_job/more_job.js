// pages/more_job/more_job.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arry: [

      { src: "../../images/job-3.jpg", title: "五金工程师 Project Engineer", name: "海福乐（深圳）贸易有限公司", type:"外贸（非欧美）", education: "专科", seniority: "不限经验", wage: "7-13千/月", address: "深圳-南山区", time: "今天" },

      { src: "../../images/job-2.jpg", title: "LED灯项目工程师", name: "海福乐（深圳）贸易有限公司", type: "外贸（非欧美）", education: "专科", seniority: "3年", wage: "8-10千/月", address: "深圳-南山区", time: "今天" },

      { src: "../../images/job-1.jpg", title: "产品工程师 Product Engineer", name: "海福乐（深圳）贸易有限公司", type: "外贸（非欧美）", education: "专科", seniority: "2-3年", wage: "10-15千/月", address: "深圳-南山区", time: "今天" },

      { src: "../../images/job-4.jpg", title: "产品工程师-宁波办事处 Product Engineer", name: "海福乐（深圳）贸易有限公司", type: "外贸（非欧美）", education: "专科", seniority: "6年", wage: "10-15千/月", address: "深圳-南山区", time: "今天" },

    ],
  },

  // 工作详情
  job_details: function (e) {
    console.log(e)
    var job_title = e._relatedInfo.anchorRelatedText;
    wx.navigateTo({
      url: '/pages/job_details/job_details?job_title=' + job_title
    });
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