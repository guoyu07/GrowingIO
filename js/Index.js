$(window).scroll(function(){
	//导航栏下滑固定
	var top = $(document).scrollTop();
	if ($(window).width()<1245) {
		$("#nav_left").css('display', 'none');
		if (top!==0) {
			$(".nav").css('background-color','#fff');
			$(".nav_right").css('background-image', 'url(images/gio-logo-primary.svg)');
			$(".nav_icon span").css('background-color', '#fc5f3a');

		}
		else{
			$(".nav").css('background-color','transparent');
			$(".nav_right").css('background-image', 'url(images/rsz_180_gio-logo.png)');
			$(".nav_icon span").css('background-color', '#fff');
		}
	}
	else{
	    if (top!==0) {
			$(".nav").css('background-color','#fff');
			$(".nav_right").css('background-image', 'url(images/gio-logo-primary.svg)');
			$(".nav_left span").css('background-color', 'rgb(101, 105, 127)');
			$(".nav_download").css('color', 'rgb(101, 105, 127)');
			$(".nav_free").css({
				'background-color': '#fc5f3a',
				'color': '#fff'
			});
			$(".nav_download").hover(function() {
				$(".nav_download").css({
					'color': '#fc5f3a',
					'text-decoration': 'none'
				});
			}, function() {
				$(".nav_download").css({
					'color': '#65697f',
					'text-decoration': 'none'
				});
			});
			$(".nav_free").hover(function() {
				$(".nav_free").css('background-color', '#dd4a3a');
				$(".nav_free").css('color', '#fff');
			}, function() {
				$(".nav_free").css('background-color', '#fc5f3a');
				$(".nav_free").css('color', '#fff');
			});
		}
		else{
			//$(".nav").css('position', 'relative');
			$(".nav").css('background-color','transparent');
			$(".nav_right").css('background-image', 'url(images/rsz_180_gio-logo.png)');
			$(".nav_left span").css('background-color', '#fff');
			$(".nav_download").css('color', '#fff');
			$(".nav_free").css({
				'background-color': '#fff',
				'color': '#fc5f3a'
			});
			$(".nav_download").hover(function() {
				$(".nav_download").css({
					'color': '#e1e2e4',
					'text-decoration': 'none'
				});
			}, function() {
				$(".nav_download").css({
					'color': '#fff',
					'text-decoration': 'none'
				});
			});
			$(".nav_free").hover(function() {
				$(".nav_free").css('color', '#fc5f3a');
				$(".nav_free").css('background-color', '#fff');

			}, function() {
				$(".nav_free").css('background-color', '#fff');
				$(".nav_free").css('color', '#dd4a3a');
			});

		}

	}

	//$("#nav_left").css('display', 'none');

});

$(document).ready(function() {

	//导航栏下拉框
	$("#nav_icon").click(function() {
		if ($("#nav_left").css('display')==='block') {
			//点击收回
			$("#nav_left").slideUp('200',function() {
				$("#nav_left").css('display', 'none');
				$(".nav").css('background-color', '#transparent');
			});
		}
		else{
			//点击打开
			//$("#nav_left").css('display', 'block');
			$("#nav_left").slideDown('200', function() {
				$(".nav_icon span").css('background-color', '#fc5f3a');
				$(".nav_right").css('background-image', 'url(images/gio-logo-primary.svg)');
				$(".nav").css('background-color', '#fff');
				$(".nav_free").css({
					'background-color': '#fc5f3a',
					'color': '#fff'
				});
			});

		}
	});
});

