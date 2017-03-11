//window.onload=function(){

var data = [
    {
        'img': './images/442.png',
        'spa': '全部商品'
    },
    {
        'img': './images/3.png',
        'spa': '超级手机'
    },
    {
        'img': './images/37.png',
        'spa': '超级电视'
    },
    {
        'img': './images/300.png',
        'spa': '全部商品'
    },
    {
        'img': './images/400.png',
        'spa': '全部商品'
    },
    {
        'img': './images/29.png',
        'spa': '全部商品'
    },
    {
        'img': './images/31.png',
        'spa': '全部商品'
    },
    {
        'img': './images/37.png',
        'spa': '全部商品'
    },
    {
        'img': './images/999.png',
        'spa': '全部商品'
    },
    {
        'img': './images/8888.png',
        'spa': '全部商品'
    },
    ];


var app = angular.module("myApp", []);
app.controller("content", function ($scope) {
    $scope.data = data;

});

window.onload = function () {
    //        响应式图片  width:100%;height:auto
    var mySwiper = new Swiper('#slide1', {
        pagination: '.swiper-pagination', //js部分
        speed: 500,
        paginationClickable: true,
        autoplay: 1000,
        loop: true,
    });
    var mySwiper = new Swiper('#slide2', {
        pagination: '.swiper-pagination',

    });
    var mySwiper = new Swiper('#slide3', {
        direction: 'vertical',
        autoplay: 1000,
        loop: true,
    });
}






//滚动到一定高度显示
$(window).scroll(function () {
    if ($(document).scrollTop() >= 880) {
        $('.return_top').slideDown(200);
        $('.return_top').css('position', 'fixed').css('bottom', '20%').css('right', '0.5rem');
    };
    if ($(document).scrollTop() < 680) {
        $('.return_top').hide();

    }
});
// 点击返回顶部
$('.return_top').click(function () {
    console.log(1);
    var distance = $(this).offset().top;
    $('html,body').animate({
        scrollTop: -distance
    }, 300);
    console.log(distance);
});




//}