


let http = require("http");



// const proxy = http.createServer((req, res) => {
//     // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.writeHead(200, { "Access-Control-Allow-Origin": "http://localhost:8080" });
//     res.writeHead(200, { "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE" });
//     res.writeHead(200, { "Access-Control-Allow-Headers": "Content-Type" });
//     res.writeHead(200, { "Access-Control-Allow-Credentials": "true" });

//     // res.writeHead("Access-Control-Allow-Origin", "*");
//     // res.writeHead("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//     // res.writeHead("Access-Control-Allow-Headers", "Content-Type");
//     // res.writeHead("Access-Control-Allow-Credentials", "true");

//     res.end(JSON.stringify(data));
// });



//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 8889;

/*
status:
// 0   已关闭
// 1   待付款
// 2   待发货
// 3   待收货
// 4	待评价


// 0   已关闭
// 1   待支付
// 2   已付款   查看详情是  取餐码 扫码取餐  导航，导航 会出现地图
// 3   已退款

1   已完成
2   

*/ 
var data = {
    myOrderData:[
        {
            id:1555166262626,
            dateTime:'2018/06/22 09:42:08',
            status:"已退款",
            goods:[
                {
                    pic:'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
                    name:"四方牛肉面",
                    num:1,
                    price:0.04
                },{
                    pic:'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
                    name:"牛肉面2222",
                    num:2,
                    price:5.06
                },
            ],

        },{
            id:1555166262626,
            dateTime:'2018/06/22 09:42:08',
            status:"已退款",
            goods:[
                {
                    pic:'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
                    name:"四方牛肉面",
                    num:1,
                    price:0.04
                },{
                    pic:'http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782',
                    name:"牛肉面2222",
                    num:2,
                    price:5.06
                },
            ],

        },

    ]
}
//创建服务
var server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true");

    res.end(JSON.stringify(data));

});
server.listen('8889', function () {
    console.log(`服务器运行在http://${hostName}:${port}`);
});



