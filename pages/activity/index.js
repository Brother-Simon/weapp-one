// pages/index/detail/news.js
import api from '../../api/api.js'
import util from '../../utils/util.js'
import WxParse from 'wxParse/wxParse.js'

Page({
  data:{},
  onLoad:function(options){
    var that = this;
    console.log(options);
    // 页面初始化 options为页面跳转所带来的参数
    api.getProduct({
      query: {
        id: 26
      },
      success: (res) => {
        console.log(res);
          let news_data = res.data;
          //news_data.question_makettime = util.formatMakettime(question.question_makettime)
          var content = res.data.content;
          WxParse.wxParse('content', 'html', content, that,5);
          this.setData({ news_data })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '北极村',
      desc: '中国龙 行天下',
      path: '/pages/activity/index'
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})