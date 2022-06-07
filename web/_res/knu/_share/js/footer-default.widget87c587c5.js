$(document).ready(function(){
	App.SelectBox2.init();
});

//-----------------------------------------------------------------------------------------
//select box(related site box)
//-----------------------------------------------------------------------------------------
App.SelectBox2 = function(){
	var self;
	var $relatedTitle, $relatedList;
	return {
		init: function(){
			self = this;
			$relatedTitle = $(".related-site-title");
			$relatedList = $(".related-site");
			$relatedTitle.click(self.onClick);

			$(".related-site-wrap").each(function(){
				var $thisBox = $(this);

				$(document).mouseup(function(e){
					if($thisBox.has(e.target).length === 0){
						$thisBox.find(".related-site-title").removeClass("active");
						$thisBox.find(".related-site-box").hide();
					}
				});

			});

		},
		onClick: function(){
			$(this).siblings('.related-site-box').toggle();
			$(this).toggleClass("active", "");
		}
	}
}();