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
    api.getNews({
      query: {
        id: options.id
      },
      success: (res) => {
        console.log(res);
        news_data = {data:{content:'<div>fdasf</div>'}}
          let news_data = res.data;
          //news_data.question_makettime = util.formatMakettime(question.question_makettime)
          var content = '12月22日晚，“龙江力量—2016首届龙江企业社会责任榜”发布仪式在黑龙江广播电视台2800米演播大厅隆重举行。哈尔滨中央红集团股份有限公司、黑龙江飞鹤乳业有限公司等62家企业分别获得“爱心奉献”、“诚实守信”、“生态环保”、“开拓创新”、“持之以恒”、“优秀实践”六大奖项。';
          WxParse.wxParse('content', 'html', content, that,5);
          this.setData({ news_data })
      }
    })
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