Vue.component('modal', {
  template: '#modal-template'
})

// start app
new Vue({
  el: '#content',
  data: {
    showModal: false,
    mobile:"",
    noMobile:true,
    tips:"",
  },
  created:function(){
    var elem = document.querySelector("#uidmobile")
    var m = elem.innerHTML
    if (m.length > 10) {
      this.noMobile = false
    }
  },
  methods:{
    checkMoney:function(){
      var elem = document.querySelector("#uidmoney")
      var num = elem.innerHTML
      var m = parseFloat(num).toFixed(2)*100
      if (m > 100) {
        console.log(m)
        var all = window.location.href
        var more = all.slice(0,all.lastIndexOf("/"))
        window.location.href = more + "/mymoney"
      } else {
        this.showModal = true
      }
    },
    closeBnt:function () {
      this.showModal = false
    },
    postMobile:function () {
      var regex = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      var m = this.mobile
      if(!regex.test(m)){
        this.tips="请填写正确的手机号码!"
      } else {
        var that = this
        const base = window.location.href;
        const href = base.slice(0,base.lastIndexOf("/")) + "/mymobile"
        axios.post(href,{
          mobile:m,
        }).then(function (res) {
          console.log(res)
          var ds = res.data
          window.location.href = base;
        }).catch(function (e) {
          console.log(e)
        })
      }
    }
  }
})
