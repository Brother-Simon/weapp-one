import api from '../../api/api.js'

Page({
  data: {
    carousel: [],
    articles: {},
    current: 0
  },
  onLoad: function () {

    
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
  onShareAppMessage: function () {
    return {
      title: '北极村',
      desc: '中国龙 行天下',
      path: '/pages/index/index'
    }
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