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
    }
  }
})
