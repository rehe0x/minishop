//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showCart: false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    state:false,
    first_click:false,
    state_tree_top:false,
    first_click_tree_top:false,
    state_top:false,
    first_click_top:false,
    state_cart:false,
    first_click_cart:false,
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
  },
  unfold: function(){
    var list_state = this.data.state,
      first_state = this.data.first_click;
    if (!first_state){
      this.setData({
       first_click: true
      });
    }
    if (list_state){
      this.setData({
       state: false
      });
    }else{
      this.setData({
       state: true
      });
    }
  },
  unfold_cart: function(){
    var cart = this.selectComponent('#cart');
    this.setData({
      showCart: cart.data.showDialog ? false : true
    });
  },
  unfold_top: function(){
    var list_state = this.data.state_tree_top,
      first_state = this.data.first_click_tree_top;
    if (!first_state){
      this.setData({
        first_click_tree_top: true
      });
    }else{
      this.setData({
        first_click_tree_top: false
      });
    }
    if (list_state){
      this.setData({
        state_tree_top: false
      });
    }else{
      this.setData({
        state_tree_top: true
      });
    }
  },
  // 页面滚动
  onPageScroll(e) {
    console.log(e)
    if (e.detail.scrollTop >= 292 && !this.data.first_click_top){
      this.setData({
        first_click_top: true
        });
        this.setData({
          state_top: true
          });
    } 
    if (e.detail.scrollTop < 292 && this.data.first_click_top){
      this.setData({
        first_click_top: false
        });
        this.setData({
          state_top: false
          });
    } 
  },
  toDetail() {
    console.log(111)
    // let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../goods/goods',
    })
  },
})
