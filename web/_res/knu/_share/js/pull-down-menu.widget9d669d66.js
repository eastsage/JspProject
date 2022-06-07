$(document).ready(function(){	
	App.SelectBoxPath.init();
});

//-----------------------------------------------------------------------------------------
//select box(path)
//-----------------------------------------------------------------------------------------
App.SelectBoxPath = function () {
	var self;
	var $path;
	return {
		init: function () {
			self = this;

			$path = $(".path-depth-wrap > ul > li");
			
			$('.path-wrap > div').each(function(){
				var pathLeng = $(this).find('.path-depth-wrap > ul > li').length;

				if(pathLeng === 4){ // 4뎁스가 탭일때
					$(this).find('.path-depth-wrap > ul > li').eq(2).addClass('end');
				}else{ // 그 외
					$(this).find('.path-depth-wrap > ul > li').eq(1).addClass('end');
				}
			});

			$path.each(function () {
				var $thisBox = $(this);
				$thisBox.find(".path-selected").click(self.onClick);

				$(document).click(function (e) {
					if ($thisBox.has(e.target).length === 0) {
						$(".path-selected").parent().removeClass("active");
						$(".path-depth").slideUp(200);
					}
				});

				$(window).resize(function() {
					$(".path-selected").parent().removeClass("active");
					$(".path-depth").slideUp(200);
				});

			});

		},
		onClick: function () {
			$(this).parents("li").find(".path-depth").slideToggle(200);
			$(this).parents("li").toggleClass("active");

			return false;
		}
	}
}();