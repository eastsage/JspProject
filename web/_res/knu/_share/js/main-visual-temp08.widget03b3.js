$(document).ready(function(){
	var myVisualSwiper = new Swiper('.main-visual-swiper', {
		loop: true,
		slidePerView: 1,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.swiper-visual-prev',
			nextEl: '.swiper-visual-next',
		},
		pagination: {
			el: '.swiper-visual-pagination',
			clickable: true,
		},
		watchOverflow: true,
	});

	/* 메인비주얼 object-fit : IE대응 */	
	if($(document).find('.vi-img-box').length > 0){	
		var mainViImg = new App.ObjectFit();
		mainViImg.init(".vi-img-box");
	}
});