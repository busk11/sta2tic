// document.write('<script src="../../js/jquery-3.4.1.min.js"></script>')
// document.write('<script src="../../js/less.min.js"></script>')
// document.write('<script src="../../layer/layer.js"></script>')
// document.write('<link href="../../css/children.less" rel="stylesheet" type="text/css">');
// document.write('<link href="../../css/common.css" rel="stylesheet" type="text/css">');
// var x = $('body').attr('id')
// console.log(x,$('body').attr('id'))
// switch(x){
//     case 1:
//         document.write('aaa');
//         break;
//     case "1":
//         document.write('AAA');
//         break;
//     case 2:
//         document.write('bbb');
//         break;
//     default:
//         document.write('ddd');
//         break;
//     case 3:
//         document.write('ccc');
//         break;
// }

function loading(){
    var index = layer.load(2, {
        shade: [0.1,'#fff'] //透明度 ，
    });
}
function layerClose(){
    layer.closeAll('loading');
}