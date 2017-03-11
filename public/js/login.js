var zh=document.querySelectorAll('item');

	 //默认 模块内容显示第一个选项卡中的内容
	 $('.items').eq(0).css('display','block');
		$('.item').each(function(){
		//获取当前点击的那个li的坐标
			var i=$(this).index();
			$(this).click(function(){
                console.log(1);
			// 移出所有的li的cc样式
			$('item').removeClass('cc');
			// 将cc样式添加给当前点击的li
			$(this).addClass('cc');
			// 隐藏所有的div
			$('.items').hide();
			//显示当前放上去的的那个
			$('.items').eq(i).show();
			})
		}).mouseleave(function(){
			$(this).removeClass('cc');
		});
	
