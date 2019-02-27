// pages/job_details/job_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    labels: [ 
      {"label": "五险一金"}, 
      {"label": "补充医疗保险"}, 
      {"label": "员工旅游"}, 
      {"label": "通讯补贴"}, 
      {"label": "专业培训"}, 
      {"label": "出国机会"}, 
      {"label": "绩效奖金"}, 
      {"label": "年终奖金"}, 
      {"label": "定期体检"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var jobDetail = JSON.parse(options.jobDetails)
    that.setData({
      // 把接收到的字符串转换成json对象
      jobDetail: jobDetail
      
    })
    wx.setNavigationBarTitle({
      title: '职位详情'  //修改title
    })

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

  }
})