// pages/product/product-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    name: '',
    imgUrl: '',
    description: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: +options.id,
      name: options.name,
      imgUrl: options.imgUrl,
      description: options.description
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
    let product = this.data
    return {
      title: `商品資訊 - ${product.name}`,
      path: `/pages/product/product-info?id=${product.id}&name=${product.name}&description=${product.description}&imgUrl=${product.imgUrl}`,
      imageUrl: product.imgUrl
    }
  },

  onViewDetail: function () {
    let url = encodeURIComponent(`https://www.google.com/search?q=${this.data.name}`)
    wx.navigateTo({
      url: `../web-view/web-view?navigateTo=${url}`
    })
  }
})