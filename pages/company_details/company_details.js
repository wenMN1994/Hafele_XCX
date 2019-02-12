// pages/company_details/company_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    business_scope:{
      text: "&emsp;&emsp;从事建筑五金产品及其配件、家具五金产品及其配件、小五金工具及其配件、模具及其配件、金属材料、灯饰及其配件的设计、研发、技术成果转让；从事家具及其组件、电器、小家电、装饰装修材料、机器、家用家居产品、日用杂品、办公用品、工艺美术品、包装材料、化工原料及产品（除危险品）、电讯器材、电线电缆、电动工具、机电设备、通讯器材、通信设备、机电、机械设备及配件、照相器材、健身器材、音响设备、酒店设备、汽摩配件、仪器仪表、陶瓷制品、卫生洁具、橡塑制品、计算机软硬件及配件、印刷机械、办公设备、文体用品、玩具、管道配件、制冷设备、压缩机及配件、服装鞋帽、纺机配件、纺织原料(除棉花) 、针纺织品、皮件制品、环保设备、水处理设备及相关配件、开关电源及相关设备、建筑材料、电子产品的批发、佣金代理（拍卖除外）、进出口（ 不涉及国贸经营管理商品，涉及配额、许可证管理及其它专项规定管理的商品，按国家有关规定办理申请）；经济信息咨询，从事上述商品的技术咨询和售后服务。从事建筑五金产品及其配件、家具五金产品及其配件、小五金工具及其配件、模具及其配件、金属材料、灯饰及其配件的生产、组装、安装、维修。"
    }
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
    wx.setNavigationBarTitle({
      title: '公司详情'  //修改title
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