//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello 小程序',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // todolist数据
    val:'',
    list:[]
  },
  // todolist事件

  // 当你输入时，获取你输入的value
  inp(e){
      // console.log(e.detail.value)
      this.setData({ val: e.detail.value})
  },
  // 添加
  add(){
    // 把输入的值添加到list
    var list1 = this.data.list
    list1.push(this.data.val)
    this.setData({
      list:list1,
      val:''
    })
    console.log(this.data.list)
  },
  // 删除
  del(e){
    console.log(e.target.dataset)
    // 获取index
    var i = e.target.dataset.index;
    var list2 = this.data.list;
    list2.splice(i,1)
    this.setData({list:list2})
  },
  //事件处理函数
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
