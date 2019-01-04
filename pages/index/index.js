//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: [
      {
        iconPath:"/images/getup.png",
        title:"早起",
        days:"37",
        completed:true
      }, 
      {
        iconPath: "/images/breakfast.png",
        title: "吃早餐",
        days: "23",
        completed: true
      }, 
      {
        iconPath: "/images/read.png",
        title: "每天读书一小时",
        days: "16",
        completed: false
      },
      {
        iconPath: "/images/leg.png",
        title: "不翘二郎腿",
        days: "16",
        completed: false
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
        days: "16",
        completed: false
      },
      {
        iconPath: "/images/sport.png",
        title: "运动",
        days: "16",
        completed: true
      },
      {
        iconPath: "/images/abc.png",
        title: "背单词",
        days: "16",
        completed: true
      }
    ]
  },
})
