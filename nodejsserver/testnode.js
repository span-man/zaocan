


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
var port = 8888;

var data = {
    goods: [
        {
            id: 1,
            pic:
                "http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782",
            name: "111煎饼",
            stock: 11,
            intro: "好吃的煎饼惺惺惜惺惺想111111x 洒洒水少时诵诗书所",
            price: 12.11,
            num: 0
        },
        {
            id: 2,
            pic:
                "http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782",
            name: "222煎饼",
            stock: 229,
            intro: "好吃的煎饼惺惺惜惺惺想22222x 洒洒水少时诵诗书所",
            price: 12.22,
            num: 0
        },
        {
            id: 3,
            pic:
                "http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782",
            name: "豆浆",
            stock: 11,
            intro: "333好吃的煎饼惺惺惜惺惺想22222x 洒洒水少时诵诗书所",
            price: 33.22,
            num: 0
        }

    ],
    /* 放入购物车的 */
    InTheBuyCar: [],
    // 弹出的具体参数
    popIntro: {},
    //总价格
    totalMoney: 0
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
server.listen('8888', function () {
    console.log(`服务器运行在http://${hostName}:${port}`);
});



