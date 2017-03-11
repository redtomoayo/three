var express = require('express');
//var express=require('express');
var router = express.Router();
//var router=express.Router();
var bodyParser = require('body-parser');
//var bodyParser=require('body-parser');
//引入密码模块
var crypto = require('crypto');
//var crypto=require('crypto');
var userModel = require("./userModel.js");

function md5(mima) {
    var md5 = crypto.createHash('md5');
    var password = md5.update(mima).digest("base64");
    return password;

}

var mongodb = require('mongodb');
var mc = mongodb.MongoClient;
var dburl = 'mongodb://127.0.0.1:27017/d_user';

function get_mc(url, callback) {
    mc.connect(url, function (err, db) {
        if (err) {
            console.log(err);
            return
        }
        callback(db);
    })
}
//引入 session
var session = require('express-session');

router.use(session({
    //secret 加密用的秘钥
    //session  的设置都是使用req;
    secret: 'dwadwa',
    cookie: {
        maxAge: 1000 * 60
    }
}));
//封装查询页面数据函数 每次返回页面都要查询数据输出到页面 所以调用一下即可
function find(req, res) {
    userModel.indexModel.find(function (err, data) {
        res.render('index', {
            data: data,
            name: req.body.uname,
            bool: true
        });

    })
}

//请求到主页
router.get('/', function (req, res, next) {
    if (req.session.login == '1') {

        userModel.indexModel.find(function (err, data) {
            res.render('index', {
                data: data,
                name: req.session.uname,
                bool: true
            });

        })
    } else {

        userModel.indexModel.find(function (err, data) {
            res.render('index', {
                data: data
            });
            console.log(data);
        })


    }

});
//点击主页图标跳转到登录页面
router.get('/login', function (req, res, next) {

    if (req.session.login == '1') {
        res.render('shopCar');
    } else {
        res.render('login');
    }
});
router.post('/d_login', function (req, res) {
    var con = {
        uname: req.body.uname,
        upass: md5(req.body.upass)
    }

    get_mc(dburl, function (db) {
        db.collection('d_datas').find(con).toArray(function (err, data) {
            console.log(data);

            if (data.length == 0) {
                res.send('没有这个账户' + '<a href="/login">返回</a>');

                return;
            } else {
                console.log("登陆成功")
                req.session.login = '1';
                req.session.uname = data[0].uname;
                req.session.cookie.maxAge = 1000 * 60;
                find(req, res);

            }


        })

    })
});
//登录页面点击返回 回到主页面
router.get('/index', function (req, res) {
        res.render('index');
    })
    //点击注册跳到注册页面
router.get('/z', function (req, res, next) {
    res.render('zhuce');
});





router.post('/zc', function (req, res, next) {
    var data1 = {
        uname: req.body.uname,
        upass: md5(req.body.upass)
    };
    var data2 = {
        uname: req.body.uname

    };
    console.log(data1);
    userModel.userModel.find(data2, function (err, data) {
        console.log(data);
        if (err) {

        } else {
            if (data.length == 0) {
                userModel.userModel.create(data1, function (err) {
                    res.send('成功');

                })
            } else {
                res.send('此账号已被注册');
            }
        }

    });
})

//点击图片导航跳转mobile_list(手机列表)
router.get('/mobile_list', function (req, res) {
    res.render('mobile_list');
})

//手机选项卡页面点击跳转到手机详情
router.get('/product', function (req, res) {
    res.render('product_list');
})
//点击购物车跳转购物车页面
router.get('/shopCar', function (req, res) {
    res.render('shopCar');
})





module.exports = router;