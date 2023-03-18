var txttips = new Vue({
  el:"#txttips",
  data:{
    list:[
      "J**3,获赠506.1元",
      "K**0,获赠87.9元",
      "H**7,获赠273.8元",
      "A**2,获赠354.7元",
      "B**8,获赠160.9元",
      "C**6,获赠1902.5元",
      "D**9,获赠1020.2元",
      "E**4,获赠213.8元",
      "F**5,获赠1056.2元",
      "Q**1,获赠3025.6元",
    ],
    msg:"J**8,获赠160.9元"
  },
  mounted:function(){
    var that = this
    setInterval(function() {
      var one = parseInt(Math.random()*10, 10)
      that.msg = that.list[one]

    },5000)
  },
  methods:{
    tips:function () {
      var list = this.list
      setInterval(function() {
        var one = parseInt(Math.random()*10, 10)
        console.log(list[one])
        return list[one]
      },2000)
    }
  }
})
