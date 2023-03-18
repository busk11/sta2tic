new Vue({
  el:"#blank",
  data:{
    list:[],
    count:0,
    isMore:true,
    isNone:true,
    incm:0,
    decm:0,
  },
  created:function(){
    this.getMore()
  },
  methods:{
    getMore:function () {
      var href = window.location.href;
      var num = this.list.length
      var that = this
      axios.post(href,{
        num:num,
      }).then(function (res) {
        console.log(res)
        var ds = res.data
        that.list = ds.list
        that.count = ds.count
        that.incm = ds.incm
        that.decm = ds.decm
        if(ds.count > 0 ) that.isNone =false;
        if(ds.list.length >= ds.count) that.isMore = false;
      }).catch(function (e) {
        console.log(e)
      })
    },
    tipForm:function (ispay) {
      return ispay ? "已领取" : "点击领取"
    },
    format:function (money) {
      return parseFloat(money/100).toFixed(2)
    },
    getMoney:function (id) {
      var href = window.location.href + "/getmoney";
      var url = href.split("award")[0] + "daili"
      var win = window
      axios.post(href,{
        id:id,
      }).then(function (res) {
        console.log(res)
        var ds = res.data
        if(ds.code == 200) {
          alert("已提交后台审核!请稍后留意微信到账通知!")
          win.location.href = url;
        } else {
          alert("网络繁忙，请稍后再试试！")
          win.location.href = url;
        }
      }).catch(function (e) {
        alert("网络繁忙，请稍后再试试！")
        win.location.href = url;
      })
    },
  }
})
