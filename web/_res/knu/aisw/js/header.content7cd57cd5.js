$(document).ready(function(){
	App.MainGnb.init();

});

//------------------------------------------------------
// MainGnb
//------------------------------------------------------
App.MainGnb = function () {
	var self;
	return {
		init: function () {
			self = this;

			$('.gnb-ul > li').each(function(){
				$(this).on('mouseenter focusin',function(){	
					if($(this).children().is('.sub-mn')){
						$('.sub-mn, .gnb-bg').hide();
						$(this).find('.sub-mn').show();
						$('.gnb-bg').show();
					}else{
						$('.sub-mn, .gnb-bg').hide();
					}
				});
			});

			// 3뎁스 메뉴 존재 시 클래스 붙임
			$('.sub-mn > li').each(function(){
				if($(this).has('.sub-mn02').length > 0){
					$(this).addClass('has-depth03 open');
					$(this).children('a').attr({'href' : '#no-menu'});
				}
				if($(this).find('.sub-mn02 li a').hasClass('active')){
					$(this).removeClass('open').addClass('close');
					$(this).find('.sub-mn02').slideDown();
				}
			});

			// 3뎁스 메뉴 열기, 닫기
			$(document).on('click', '.has-depth03.open > a', function(){
				$(this).parent('li').siblings().removeClass('close').addClass('open');
				$(this).parent('li').removeClass('open').addClass('close');
				$(this).parent('li').siblings().find('.sub-mn02').slideUp();
				$(this).next('.sub-mn02').slideDown();
			});
			$(document).on('click', '.has-depth03.close > a', function(){
				$(this).parent('li').removeClass('close').addClass('open');
				$(this).next('.sub-mn02').slideUp();
			});

			// 개행 처리
			$('.sub-mn02 > li').each(function(){
				var subMn02Str = $(this).find('a').text();
				subMn02Str = subMn02Str.replace('\\', '<br>');

				$(this).find('a').html('<span>' + subMn02Str + '</span>');
			});

			$('.bottom-header-wrap').mouseleave(function(){
				$('.sub-mn, .gnb-bg').hide();
			});
		}
	}
}();