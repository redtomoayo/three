
        //    测试jq是否引入
        //    console.log($);
        //    alert($);
    

        // 字体响应式
        (function (doc, win) {
            var docEl = doc.documentElement; //html
//            var bodys = doc.body; console.log(bodys);
            var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

            // 事件部分
            var recalc = function () {
                    var clientWidth = docEl.clientWidth; //视口宽度
                    if (!clientWidth) return;
                    docEl.style.fontSize = 20 / 375 * clientWidth + "px";
//               bodys.style.fontSize = 20 / 320 * clientWidth + "px";
            }
                // 触发部分

            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
            // $(function(){

            // })
            // window.onload

        })(document, window)
  