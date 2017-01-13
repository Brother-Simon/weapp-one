import api from '../../api/api.js'
import util from '../../utils/util.js'

Page({
  data: {
    vols: [],
    current: 0
  },
  
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '交通现场'
    })
  },

  onLoad: function () {
    api.getVolIdList({
      success: (res) => {
        res = {data:{"res":0,"data":["1587","1586","1585","1580","1584","1581","1577","1583","1578","1579"]}};
        if (res.data.res === 0) {
          let idList = res.data.data
          this.getVols(idList)
        }
      }
    })
  },
  getVols: function (idList) {
    let vols = this.data.vols

    if (idList.length > 0) {
      api.getVolById({
        query: {
          id: idList.shift()
        },
        success: (res) => {
          console.log('has reques');
          res = {data:{
  "res": 0,
  "data": {
    "hpcontent_id": "1587",
    "hp_title": "VOL.1560",
    "author_id": "-1",
    "hp_img_url": "http://image.wufazhuce.com/FvN_7vufgu23MHRTVVmuPi2ddMr4",
    "hp_img_original_url": "http://image.wufazhuce.com/FvN_7vufgu23MHRTVVmuPi2ddMr4",
    "hp_author": "摄影＆jessica todd harper 作品",
    "ipad_url": "http://image.wufazhuce.com/FvN_7vufgu23MHRTVVmuPi2ddMr4",
    "hp_content": "人生空虚，有点爱，有些仇，还有互道早安；人生苦短，有点希望，有些梦想，还有互道晚安。 from 《尼罗河上的惨案》",
    "hp_makettime": "2017-01-13 06:00:00",
    "hide_flag": "0",
    "last_update_date": "2017-01-05 15:47:58",
    "web_url": "http://m.wufazhuce.com/one/1587",
    "wb_img_url": "",
    "image_authors": "jessica todd harper",
    "text_authors": "《尼罗河上的惨案》",
    "image_from": "",
    "text_from": "",
    "content_bgcolor": "#FFFFFF",
    "template_category": "0",
    "maketime": "2017-01-13 06:00:00",
    "share_list": {
      "wx": {
        "title": "",
        "desc": "",
        "link": "",
        "imgUrl": ""
      },
      "weibo": {
        "title": "ONE·一个 人生空虚，有点爱，有些仇，还有互道早安；人生苦短，有点希望，有些梦想，还有互道晚安。 from 《尼罗河上的惨案》——《尼罗河上的惨案》 下载ONE·一个APP:http://weibo.com/p/100404157874",
        "desc": "",
        "link": "",
        "imgUrl": ""
      },
      "qq": {
        "title": "",
        "desc": "",
        "link": "",
        "imgUrl": ""
      }
    },
    "praisenum": 3409,
    "sharenum": 386,
    "commentnum": 0
  }
}}
          if (res.data.res === 0) {
            let vol = res.data.data
            
            vol.hp_makettime = util.formatMakettime(vol.hp_makettime)
            vols.push(vol)
          }
          this.getVols(idList)
        }
      })
    } else {
      this.setData({ vols })
    }
  },
  handleChange: function (e) {
    let current = e.detail.current
    let volsLength = this.data.vols.length

    if (current === volsLength) {
      this.setData({
        current: volsLength
      })
      wx.navigateTo({
        url: '../history/history?page=index',
        success: () => {
          this.setData({
            current: volsLength - 1
          })
        }
      })
    }
  }
})
