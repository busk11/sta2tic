var redA = new Vue({
    el:"#redA",
    data:{
        url:"",
        content:"",
        mask:false,
    },
    methods:{
        redA:function (e) {
            var href = window.location.href
            var form = document.querySelector("#icbc_action")
            var version = document.querySelector("#icbc_version")
            var customerid = document.querySelector("#icbc_customerid")
            var paytype = document.querySelector("#icbc_paytype")
            var total_fee = document.querySelector("#icbc_fee")
            var sdorderno = document.querySelector("#icbc_sdorderno")
            var notifyurl = document.querySelector("#icbc_notifyurl")
            var returnurl = document.querySelector("#icbc_returnurl")
            var sign = document.querySelector("#icbc_sign")
            var mask = document.querySelector(".mask-over")
            var that = this
            mask.style.display = "block"
            href = href.split("home")[0] + "qrhome"
            axios.post(href,{
                money:10*100,
            }).then(function (res) {
                var ds = res.data
                if(ds.code==200) {
                    mask.style.display = "none"
                    alert(JSON.stringify(ds))
                } else if(ds.code==250){
                    mask.style.display = "none"
                } else {
                    alert("网络繁忙，稍后再试!")
                }
            }).catch(function (e) {
                alert(e)
            })
        }
    }
})


var redB = new Vue({
    el:"#redB",
    data:{
        url:"",
        content:"",
        mask:false,
    },
    methods:{
        redB:function (e) {
            var href = window.location.href
            var form = document.querySelector("#icbc_action")
            var version = document.querySelector("#icbc_version")
            var customerid = document.querySelector("#icbc_customerid")
            var paytype = document.querySelector("#icbc_paytype")
            var total_fee = document.querySelector("#icbc_fee")
            var sdorderno = document.querySelector("#icbc_sdorderno")
            var notifyurl = document.querySelector("#icbc_notifyurl")
            var returnurl = document.querySelector("#icbc_returnurl")
            var sign = document.querySelector("#icbc_sign")
            var mask = document.querySelector(".mask-over")
            var that = this
            mask.style.display = "block"
            href = href.split("home")[0] + "qrhome"
            axios.post(href,{
                money:20*100,
            }).then(function (res) {
                var ds = res.data
                if(ds.code==200) {
                    mask.style.display = "none"
                    alert(ds.qrcode)
                } else if(ds.code==250){
                    mask.style.display = "none"
                } else {
                    alert("网络繁忙，稍后再试!")
                }
            }).catch(function (e) {
                alert(e)
            })
        }
    }
})


var redC = new Vue({
    el:"#redC",
    data:{
        url:"",
        content:"",
        mask:false,
    },
    methods:{
        redC:function (e) {
            var href = window.location.href
            var form = document.querySelector("#icbc_action")
            var version = document.querySelector("#icbc_version")
            var customerid = document.querySelector("#icbc_customerid")
            var paytype = document.querySelector("#icbc_paytype")
            var total_fee = document.querySelector("#icbc_fee")
            var sdorderno = document.querySelector("#icbc_sdorderno")
            var notifyurl = document.querySelector("#icbc_notifyurl")
            var returnurl = document.querySelector("#icbc_returnurl")
            var sign = document.querySelector("#icbc_sign")
            var mask = document.querySelector(".mask-over")
            var that = this
            mask.style.display = "block"
            href = href.split("home")[0] + "qrhome"
            axios.post(href,{
                money:50*100,
            }).then(function (res) {
                var ds = res.data
                if(ds.code==200) {
                    mask.style.display = "none"
                    alert(ds.qrcode)
                } else if(ds.code==250){
                    mask.style.display = "none"
                } else {
                    alert("网络繁忙，稍后再试!")
                }
            }).catch(function (e) {
                alert(e)
            })
        }
    }
})


var redD = new Vue({
    el:"#redD",
    data:{
        url:"",
        content:"",
        mask:false,
    },
    methods:{
        redD:function (e) {
            var href = window.location.href
            var form = document.querySelector("#icbc_action")
            var version = document.querySelector("#icbc_version")
            var customerid = document.querySelector("#icbc_customerid")
            var paytype = document.querySelector("#icbc_paytype")
            var total_fee = document.querySelector("#icbc_fee")
            var sdorderno = document.querySelector("#icbc_sdorderno")
            var notifyurl = document.querySelector("#icbc_notifyurl")
            var returnurl = document.querySelector("#icbc_returnurl")
            var sign = document.querySelector("#icbc_sign")
            var mask = document.querySelector(".mask-over")
            var that = this
            mask.style.display = "block"
            href = href.split("home")[0] + "qrhome"
            axios.post(href,{
                money:100*100,
            }).then(function (res) {
                var ds = res.data
                if(ds.code==200) {
                    mask.style.display = "none"
                    alert(ds.qrcode)
                } else if(ds.code==250){
                    mask.style.display = "none"
                } else {
                    alert("网络繁忙，稍后再试!")
                }
            }).catch(function (e) {
                alert(e)
            })
        }
    }
})


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

