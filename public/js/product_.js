window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
    });
    
    
(function date() {
        //    订单发货时间
        var date = new Date();
        var day = date.getDate();
        var future = day + 7;
        console.log(future);
        $('.address_foot ').html('24:00前完成支付，预计（本月' + future + '）之前发货');

        //手机颜色选择
        $('.color_box').each(function () {
            var i = $(this).index();
            $(this).click(function () {
                $('.color_box').removeClass('bg');
                $(this).addClass('bg');
                 console.log($(this).find('em').html());
                var text=$(this).find('em').html();
                $('.one_a').html(text);

            });


        });
        $('.color_box1').each(function () {
            var i = $(this).index();
            $(this).click(function () {
                $('.color_box1').removeClass('bg');
                $(this).addClass('bg');
                var text=$(this).find('em').html();
                $('.two_b').html(text);
            })
        });
        $('.color_box2').each(function () {
            var i = $(this).index();
            $(this).click(function () {
                $('.color_box2').removeClass('bg');
                $(this).addClass('bg');
                 var text=$(this).find('em').html();
                $('.three_c').html(text);
            })
        });

        //        点击是否选择套装  
        $('.sele').click(function () {
            //点击进来后进行判断 如果没有numss=true属性 说明是第一次点击直接越过if判断向下走;
            if ($(this).attr('numss') == 'true') {
                $(this).css('background', 'url(./images/1636666649991405.jpg) right center no-repeat').css('background-size', '0.9rem auto');
                $(this).attr('numss', 'false');
                return
            }
            $('.sele').attr('numss', '');
            $(this).attr('numss', 'true');

            $(this).css('background', 'url(./images/15552146095764674.jpg)  center no-repeat').css('background-size', '0.9rem auto');

        });

        //        点击显示隐藏手机数据
        //        默认显示第一个

        $('.disappear').eq(0).css('display', 'block');
        $('.yi').eq(0).click(function () {
//                    console.log(i);
                if ($(this).attr('numss') == 'true') {
                    console.log('a');
                    $('.disappear').hide('slow');

                    $(this).attr('numss', '');
//                         $('.top_bottom').eq(0).html('︿');
                    return
                }
                // 初始化所有的numss属性,并给当前点击的这个加上numss=true,以便第二次点击的时候判断点击的是否是相同的一个,也就是第二次点击的时候先进入上面那个判断,点击的是同一个就把他hide,再点就show;
//                 $('.top_bottom').eq(0).html('﹀');
                $('.yi').attr('numss', '');
                $(this).attr('numss', 'true');

                $('.disappear').hide();
                //显示当前放上去的的那个
                $('.disappear').eq(0).slideDown("slow");
            });
         //        点击显示隐藏手机数据
             $('.yi').eq(1).click(function () {
//                    console.log(i);
                if ($(this).attr('numss') == 'true') {
                    console.log('a');
                    $('.disappear').hide('slow');

                    $(this).attr('numss', '');
                    return
                }   

                // 初始化所有的numss属性,并给当前点击的这个加上numss=true,以便第二次点击的时候判断点击的是否是相同的一个,也就是第二次点击的时候先进入上面那个判断,点击的是同一个就把他hide,再点就show;
                $('.yi').attr('numss', '');
                $(this).attr('numss', 'true');

                $('.disappear').hide();
                //显示当前放上去的的那个
                $('.disappear').eq(1).slideDown("slow");
            })
//    点击显示联机城市
    $('.address_content').click(function () {
        console.log(1);
        $('.hid').show();
    })





    })();
    
    
}