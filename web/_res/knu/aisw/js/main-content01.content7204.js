$(document).ready(function(){
  
	App.MainContent01.init();
	
});

//-----------------------------------------------------------------------------------------
//MainContent01
//-----------------------------------------------------------------------------------------
App.MainContent01 = function(){
	var self;
	return {
		init: function(){
			self = this;

			// main content01 미니보드 탭
			$('.mini-board-tab').on('click', function () {
				$(this).parent().siblings().removeClass('active');
				$(this).parent().addClass('active');
			});

		}
	}
}();