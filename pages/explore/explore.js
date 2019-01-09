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
    ],
    recordList: [{
      userIconPath: "/images/user-icon1.png",
      userName: "仙女猪",
      habitName: "练字",
      recordTime: "2018/12/30 22:33",
      recordDays: "17",
      recordImagePath: "/images/record-img1.png",
      recordText: "摘自顾城《星月的由来》。\n希望自己也能像顾城，保持纯粹的心，看见奇异的世界。",
      comment: [{
        from: "南木",
        content: "好漂亮呀！"
      } , 
      {
          from: "仙女猪",
          to: "南木",
          content: "谢谢o(∩_∩)o"
      },
      {
        from: "李子烽123",
        content: "不仅字好看 拍的角度和用的滤镜也很好"
      }],
      liked: false,
      countLike: "12",
      countComment: "3"
    },
    {
      userIconPath: "/images/user-icon2.png",
      userName: "Diana Lee",
      habitName: "对一天进行回顾",
      recordTime: "2019/01/05 22:48",
      recordDays: "112",
      recordText: "机跑五公里。\n这个月高烧反复两天，熬了两天两夜的我，感觉全凭一口仙气儿吊着，感觉人生好high呀～\n重温了我的野蛮女友，全智贤甩头的瞬间真美！\n虽然不喜欢实习过程中的自己，但是感谢遇到所有人和事，祝愿大家在之后都能发展顺利！",
      liked: true,
      countLike: "7",
      countComment: ""
    },
    {
      userIconPath: "/images/user-icon3.png",
      userName: "远-行者",
      habitName: "吃早餐",
      recordTime: "2019/01/05 07:33",
      recordDays: "67",
      recordImagePath: "/images/record-img2.png",
      recordText: "厚吐司来啦！！！难得悠闲的早上，自己动手做早餐，临时提升一下生活品质"
    }]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
