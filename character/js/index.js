$(function() {
	
	//轮播图
	function turnPics() {
		var currentIndex = 0;
		var isStop = false;
		$("ul#numbers").find("li").first().addClass("number_over").siblings("li").removeClass("number_over");
		var $imgs = $("ul#imgs").find("li");
		var $numbers = $("ul#numbers").find("li");
		setInterval(function() {
			if (isStop) {
				return;
			}
			currentIndex++;
			if (currentIndex === $numbers.length) {
				currentIndex = 0;
			}
			$imgs.eq(currentIndex).fadeIn("slow").siblings("li").fadeOut("slow");
			$numbers.eq(currentIndex).addClass("number_over").siblings("li").removeClass("number_over");
		}, 2000);

		$imgs.mouseover(function() {
			isStop = true
			currentIndex = $imgs.index($(this));
			$imgs.eq(currentIndex).fadeIn("slow").siblings("li").fadeOut("slow");
			$numbers.eq(currentIndex).addClass("number_over").siblings("li").removeClass("number_over");
		}).mouseout(function() {
			isStop = false;
		});
		$numbers.mouseover(function() {
			isStop = true
			currentIndex = $numbers.index($(this));
			$imgs.eq(currentIndex).fadeIn("slow").siblings("li").fadeOut("slow");
			$numbers.eq(currentIndex).addClass("number_over").siblings("li").removeClass("number_over");
		}).mouseout(function() {
			isStop = false;
		});
	}
	
	 turnPics();
	
	//滑动
	function leftScroll() {
		var isStop = false;
		var marginLeft = 0;
		setInterval(function() {
			if (isStop) {
				return;
			}
			$(".tgjlx ul").find("li").first().animate({
				"margin-left": marginLeft--
			}, 0, function() {
				if (!$(this).is(":animated")) {
					if ((-marginLeft) > $(this).width() + 19) {
						$(this).css({
							"margin-left": 0
						}).appendTo($(".tgjlx ul"));
						marginLeft = 0;
					}
				}
			});
		}, 50);
		$(".tgjlx ul").find("li").mouseover(function() {
			isStop = true;
		}).mouseout(function() {
			isStop = false;
		});
	}
	
	leftScroll();
});
