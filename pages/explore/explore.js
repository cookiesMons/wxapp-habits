//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    imgUrls: [
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.png'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    habitsRecommendation: [
      {
        iconPath: "/images/getup.png",
        title: "早起"
      },
      {
        iconPath: "/images/dairy.png",
        title: "写日记",
        days: "16",
        completed: true
      },
      {
        iconPath: "/images/camera.png",
        title: "拍照",
      },
      {
        iconPath: "/images/sport.png",
        title: "运动",
      },
      {
        iconPath: "/images/breakfast.png",
        title: "吃早餐"
      },
      {
        iconPath: "/images/abc.png",
        title: "背单词",
      }
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
