// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    profile: { text:"&emsp;&emsp;海福乐（深圳）贸易有限公司成立于1998年6月，是德国海福乐集团在亚洲地区的采购中心。海福乐集团是一家以家具配件、建筑五金及电子锁为主打产品的国际性家具产品制造商。深圳公司为全集团在中国寻找合适的OEM供应商，集采购设计贸易功能于一体，并建立了全套五金测试实验室; 协助集团各分公司了解市场，跟进生产情况，解决供应商生产技术问题，以保证供应商能按照深圳公司要求生产和出货。\n&emsp;&emsp;自1998年进入中国，享誉世界五金行业的著名品牌“海福乐/HAFELE”已被越来越多的国内外消费者认可，成为许多著名家具及房门生产各厂家的首选配件。深圳公司逐渐成长为海福乐全球集团最重要成员之一。"}
  },

  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '0755-26856100' // 仅为示例，并非真实的电话号码
    })
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

  }
})