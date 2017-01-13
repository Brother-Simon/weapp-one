import api from '../../api/api.js'

Page({
  data: {
    carousel: [],
    articles: {},
    current: 0
  },
  onLoad: function () {
    api.getCarousel({
      success: (res) => {
        res = {data:{
  "res": 0,
  "data": [
    {
      "id": "128",
      "title": "潜能Skinner",
      "cover": "http://image.wufazhuce.com/FqFj7Sk0JvJSVMzbc0JFgu0BrBaa",
      "bottom_text": "世界上到底有没有成功的催眠大师？",
      "bgcolor": "#d7560f",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/128"
    },
    {
      "id": "127",
      "title": "这一年过的如何？",
      "cover": "http://image.wufazhuce.com/Fr_r7e50MifiPsyWbFhsvcY3mfk_",
      "bottom_text": "“梦短梦长俱是梦，年来年去是何年。”",
      "bgcolor": "#24423A",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/127"
    },
    {
      "id": "126",
      "title": "我们生来就是孤独",
      "cover": "http://image.wufazhuce.com/FgUR18YWpOjS1p9t0ey_RxDSKzR3",
      "bottom_text": "“不管你拥有什么，我们生来就是孤独。”",
      "bgcolor": "#1c2454",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/126"
    },
    {
      "id": "125",
      "title": "这一切并没有那么糟",
      "cover": "http://image.wufazhuce.com/Fj_ePRtSc7yyPL3tf9kcQlhKdm0y",
      "bottom_text": "“以前觉得，勇敢就是粗暴地面对恐惧。后来发现，温柔也是勇敢。”",
      "bgcolor": "#124fa2",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/125"
    },
    {
      "id": "124",
      "title": "七堇年专题",
      "cover": "http://image.wufazhuce.com/FgDYdRk3BWNtbCtjkKIU5vo-ZWFP",
      "bottom_text": "“就让我们继续与生命的慷慨与繁华相爱；即使岁月以刻薄与荒芜相欺。”",
      "bgcolor": "#393135",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/124"
    },
    {
      "id": "123",
      "title": "你再不来，我要下雪了",
      "cover": "http://image.wufazhuce.com/Ftgg6J7j3qldjC_qDirU4x-OYFLp",
      "bottom_text": "拥抱着就能取暖，依偎着便能生存。",
      "bgcolor": "#f7bfbb",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/123"
    }
  ]
        }}
        if (res.data.res === 0) {
          
          let carousel = res.data.data
          this.setData({ carousel })
        }
      }
    })
    
      wx.request({
    url: "https://api.todolists.cn/frontend/web/api/v1/news",
    method: 'GET',
    data: {},
    header: {
      'Content-Type': 'application/json'
    },
    success: (res) => {
      console.log(res);
          let articles = res.data.items
          this.setData({ articles })
      wx.hideToast()
    },
    fail: (res) => {
      // params.fail && params.fail(res)
    },
    complete: (res) => {
      // params.complete && params.complete(res)
    }
  })
    // api.getLastArticles({
    //   success: (res) => {

    //     if (res.data.res === 0) {
    //       let articles = res.data.data
    //       this.setData({ articles })
    //     }
    //   }
    // })
  },

  tapEssay: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'essay/essay?id=' + id
    })
  },
  tapSerial: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'serial/serial?id=' + id
    })
  },
  tapQuestion: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'question/question?id=' + id
    })
  },
  handleChange: function (e) {
    let current = e.detail.current
    let length = this.data.articles.essay.length

    if (current === length) {
      this.setData({
        current: length
      })
      wx.navigateTo({
        url: '../history/history?page=reading',
        success: () => {
          this.setData({
            current: length - 1
          })
        }
      })
    }
  }
})