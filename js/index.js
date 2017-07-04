$(function(){
	$('.cho_1 p').click(function(){
		$('.cho_1 p').removeClass('on1').eq($(this).index()).addClass('on1');
		$('.cho_2').hide().eq($(this).index()).show(0,function(){
			var $show=$(this).children('.cho_3');
			var $show2=$(this).children('p')
			$(this).children('p').each(function(index){
				$(this).click(function(){
					$show2.removeClass('on2');
					$(this).addClass('on2');
					$show.hide().eq(index).show()
				})
			})
		})
	});
})