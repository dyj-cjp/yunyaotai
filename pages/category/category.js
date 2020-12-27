// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:getApp().globalData.statusBarHeight,
    title:[
      {
        message:"全部",
        tag:"tag0",
        scrolltag:"tag1",
        type:"c0"
      },
      {
        message:"心脑用药",
        tag:"tag1",
        scrolltag:"tag2",
        type:"c1"
      },
      {
        message:"清热解毒",
        tag:"tag2",
        scrolltag:"tag3",
        type:"c2"
      },
      {
        message:"儿科用药",
        tag:"tag3",
        scrolltag:"tag4",
        type:"c3"
      },
      {
        message:"胃肠用药",
        tag:"tag4",
        scrolltag:"tag5",
        type:"c4"
      },
      {
        message:"皮肤用药",
        tag:"tag5",
        scrolltag:"tag6",
        type:"c5"
      },
      {
        message:"补益安神",
        tag:"tag6",
        scrolltag:"tag7",
        type:"c6"
      },
      {
        message:"风湿骨痛",
        tag:"tag7",
        scrolltag:"tag8",
        type:"c7"
      },
      {
        message:"家用常备",
        tag:"tag8",
        scrolltag:"tag0",
        type:"c8"
      }
    ],
    druglist:[
        
    ],
    tag:"",
    scrollTop:"100rpx",
    toView:'#'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var tag=options.bindtag;
    var type=options.bindtype;
    wx.request({
      // url: 'http://localhost:8080/drug/api/drug/search',
      // url:'http://192.168.43.29:8080/drug/api/drug/search',
      // url:'http://172.81.245.195:8080/drug/api/drug/search',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/drug/search',
      data:{
        type:type,
        page:0,
        size:150
      },
      success:function(res){
        console.log(res);
        that.setData({
          druglist:res.data.content
        })
      }
    })
    console.log(tag);
    that.setData({
      tag:tag,
      toView:tag
    })
  },
changeTitle:function(e){
  var that=this;
  let number=e.currentTarget.dataset.num;
  let type=e.currentTarget.dataset.type;
  if(type=="c0"){
    wx.request({
      // url: 'http://localhost:8080/drug/api/drug/find',
      // url:'http://192.168.43.29:8080/drug/api/drug/find',
      // url:'http://172.81.245.195:8080/drug/api/drug/find',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/drug/find',
      data:{
        page:0,
        size:150
      },
      success:function(res){
        that.setData({
          druglist:res.data.content
        })
      }
    })
  }else{
    wx.request({
      // url: 'http://localhost:8080/drug/api/drug/search',
      // url:'http://192.168.43.29:8080/drug/api/drug/search',
      // url:'http://172.81.245.195:8080/drug/api/drug/search',
      url:'https://www.cauliflowerlucky.com:8080/drug/api/drug/search',
      data:{
        type:type,
        page:0,
        size:150
      },
      success:function(res){
        console.log(res);
        that.setData({
          druglist:res.data.content
        })
      }
    })
  }
  //写这种代码不会被打吧哈哈哈
  if(number==0){
    this.setData({
      tag:"tag0"
    })
  }
  if(number==1){
    this.setData({
      tag:"tag1"
    })
  }
  if(number==2){
    this.setData({
      tag:"tag2"
    })
  }
  if(number==3){
    this.setData({
      tag:"tag3"
    })
  }
  if(number==4){
    this.setData({
      tag:"tag4"
    })
  }
  if(number==5){
    this.setData({
      tag:"tag5"
    })
  }
  if(number==6){
    this.setData({
      tag:"tag6"
    })
  }
  if(number==7){
    this.setData({
      tag:"tag7"
    })
  }
  if(number==8){
    this.setData({
      tag:"tag8"
    })
  }
},
toDrugDetail:function(e){
  var id=e.currentTarget.dataset.id;
  wx.navigateTo({
    url:"../drugdetail/drugdetail?id="+id
  })
},
backUserHome:function(e){
  wx.reLaunch({
    url:"../userhome/userhome"
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

  }
})