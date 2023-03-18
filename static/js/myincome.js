new Vue({
  el:"#blank",
  data:{
    list:[],
    count:0,
    isMore:true,
    isNone:true,
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
        if(ds.count > 0 ) that.isNone =false;
        if(ds.list.length >= ds.count) that.isMore = false;
      }).catch(function (e) {
        console.log(e)
      })
    },
    timeForm:function (tm) {
      return moment(tm).format("YYYY-MM-DD HH:mm:ss")
    },
    checkMoney:function (one) {
       var id = document.querySelector("#openid").innerHTML
       if(one.OneId == id){
         return "一级分佣:" + parseFloat(one.OneMoney/100).toFixed(2) + "元"
       }
      if(one.TwoId == id){
        return "二级分佣:" + parseFloat(one.TwoMoney/100).toFixed(2) + "元"
      }
      if(one.ThreeId == id){
        return "三级分佣:" + parseFloat(one.ThreeMoney/100).toFixed(2) + "元"
      }
      if(one.FourId == id){
          return "四级分佣:" + parseFloat(one.FourMoney/100).toFixed(2) + "元"
      }
      if(one.FiveId == id){
          return "五级分佣:" + parseFloat(one.FiveMoney/100).toFixed(2) + "元"
      }
      if(one.SixId == id){
          return "六级分佣:" + parseFloat(one.SixMoney/100).toFixed(2) + "元"
      }
      if(one.SevenId == id){
          return "七级分佣:" + parseFloat(one.SevenMoney/100).toFixed(2) + "元"
      }
      if(one.EightId == id){
          return "八级分佣:" + parseFloat(one.EightMoney/100).toFixed(2) + "元"
      }

    },
    format:function (money) {
      return parseFloat(money/100).toFixed(2)
    }
  }
})
