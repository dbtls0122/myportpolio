$(function(){
 //브라우저(viewport)의 높이값을 article의 높이값으로 갱신

 var ht=$(window).height();
 $('article').height(ht);

 //브라우저가 리사이즈 될 때마다 article의 높이값 갱신

 $(window).on('resize',function(){
 			var ht=$(window).height()
 				$('article').height(ht);
 			
 });


 			//article 위에서 마우스 휠을 움직이면
 			$('article').on('mousewheel',function(event,delta){
 					if(delta>0){//마우스 휠을 올렸을 때
 						var prev =$(this).prev().offset().top;
 						$('html,body').stop().animate({'scrollTop':prev},1000,'easeOutBounce');
 					} else if(delta<0){//마우스 휠을 올렸을 때
 						 var next =$(this).next().offset().top;
 						 $('html,body').stop().animate({'scrollTop':next},1000,'easeOutBounce');

 					}
 			});
 });


