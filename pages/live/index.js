import api from '../../api/api.js'
import util from '../../utils/util.js'

function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data: {
    vols: [],
    current: 0
  },
  
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
    wx.setNavigationBarTitle({
      title: '直播'
    })
  },

  data2: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },

  onLoad: function () {
    api.getLive({
      success: (res) => {
        //res = {data:{"res":0,"data":["1587","1586","1585","1580","1584","1581","1577","1583","1578","1579"]}};
        let live_data = res.data.items;
        console.log(live_data);
        this.setData({ live_data })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '北极村',
      desc: '中国龙 行天下',
      path: '/pages/live/index'
    }
  },
  handleChange: function (e) {
    console.log(e);
    this.videoContext = wx.createVideoContext('myVideo_' + (e.detail.current - 1));
     this.videoContext.pause();
         this.videoContext = wx.createVideoContext('myVideo_' + (e.detail.current + 1));
     this.videoContext.pause();
     console.log('fff')
    // let current = e.detail.current
    // let volsLength = this.data.vols.length

    // if (current === volsLength) {
    //   this.setData({
    //     current: volsLength
    //   })
    //   wx.navigateTo({
    //     url: '../history/history?page=index',
    //     success: () => {
    //       this.setData({
    //         current: volsLength - 1
    //       })
    //     }
    //   })
    // }
  }
})
