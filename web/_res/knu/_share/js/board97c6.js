$(document).ready(function () {

	faqListToggle01(); //slideDown FAQ(아코디언 형식 아님)
	function faqListToggle01() {
		$(".bn-list-faq01 .b-title-box").find("a").click(function () {
			if ($(this).parents("li").find(".b-ans-box").is(":hidden")) {
				$(this).parents("li").find(".b-ans-box").slideDown(100);
				$(this).parents(".b-quest-box").addClass("faq-close");
			} else if ($(this).parents("li").find(".b-ans-box").is(":visible")) {
				$(this).parents("li").find(".b-ans-box").slideUp(100);
				$(this).parents(".b-quest-box").removeClass("faq-close");
			}
		});

	}

	faqListToggle02(); //show, hide FAQ(아코디언 형식)
	function faqListToggle02() {
		$(".bn-list-faq02 .b-title-box").find("a").click(function () {
			if ($(this).parents(".b-quest-box").next(".b-ans-box").is(":hidden")) {
				$(".bn-list-faq02").find(".b-ans-box").hide();
				$(this).parents(".b-quest-box").next(".b-ans-box").show();
				$(".b-quest-box").removeClass("active");
				$(this).parents(".b-quest-box").addClass("active");
			} else if ($(this).parents(".b-quest-box").next(".b-ans-box").is(":visible")) {
				$(this).parents(".b-quest-box").next(".b-ans-box").hide();
				$(this).parents(".b-quest-box").removeClass("active");
			}

		});
	}

	//========================
	//실행 오브젝트 목록
	//========================
	App.BoardCommon.init();
	App.BoardSelectBox.init();
	App.CateSelectBox.init();
	App.CampusMap.init();

	// bn-view-common02 - 이미지 swiper 실행문
	if($(document).has('.b-img-swiper-box').length > 0){
		var galleryThumbs = new Swiper('.b-img-thumb-swiper', {
			spaceBetween: 20,
			slidesPerView: 4,
			freeMode: true,  
			watchSlidesVisibility: true,  
			watchSlidesProgress: true,  
			centeredSlides: true,
			slideToClickedSlide: true,
			navigation: {
				nextEl: '.swiper-thumb-gallery-next',
				prevEl: '.swiper-thumb-gallery-prev',
			},
			breakpoints: {
				768: {				
					slidesPerView: 2,
					spaceBetween: 10
				},
				1024: {				
					slidesPerView: 3,
					spaceBetween: 15
				}
			}
		});
		var galleryTop = new Swiper('.b-img-view-swiper', {
			autoHeight:true,
			navigation: {
				nextEl: '.swiper-view-gallery-next',
				prevEl: '.swiper-view-gallery-prev',
			},
			on:{
				beforeResize: function() {
					if ($(window).width() < 1920) {
						galleryTop.slides.css('width', '');
					}
				}
			}
		});

		galleryTop.controller.control = galleryThumbs;
		galleryThumbs.controller.control = galleryTop;
	}

	//일반 view 페이지 내 이미지 carousel (view-common02) object-fit : IE대응
	var bnImg02Type01View = new App.ObjectFit();
	bnImg02Type01View.init(".bn-view-common02 .b-img-thumb-box .b-thumb a");

	//카드형 이미지 게시판(img01 type02) object-fit : IE대응
	var bnImg01Type01 = new App.ObjectFit();
	bnImg01Type01.init(".bn-list-img01.type01 .b-box01 .b-img-box a");

	//카드형 이미지 게시판(img01 type02) object-fit : IE대응
	var bnImg01Type02 = new App.ObjectFit();
	bnImg01Type02.init(".bn-list-img01.type02 .b-box01 .b-img-box a");

	//카드형 이미지 게시판(img01 type02) object-fit : IE대응
	var bnImg01Type03 = new App.ObjectFit();
	bnImg01Type03.init(".bn-list-img01.type03 .b-box01 .b-img-box a");

	//카드형 이미지 게시판(img02 type01) object-fit : IE대응
	var bnImg02Type01 = new App.ObjectFit();
	bnImg02Type01.init(".bn-list-img02.type01 .b-box01 .b-img-box a");

	//카드형 이미지 게시판(img01 type02) object-fit : IE대응
	var bnThumb01Type01 = new App.ObjectFit();
	bnThumb01Type01.init(".bn-list-thumb01.type01 .b-box01 .b-img-box a");

	//인물소개 리스트01(type01) object-fit : IE대응
	/*
	var bnPerson01Type01 = new App.ObjectFit();
	bnPerson01Type01.init(".bn-list-person01.type01 .b-wrap > div > div .b-img-box");

	//인물소개 리스트02(type01) object-fit : IE대응
	var bnPerson02Type01 = new App.ObjectFit();
	bnPerson02Type01.init(".bn-list-person02.type01 .b-wrap > div > div .b-person-box .b-img-box");
	*/


});

//==================================================
//Board Common
//==================================================
App.BoardCommon = function () {
	var self;
	var ua, isIe;
	return {
		init: function () {
			self = this;

			//게시판 view 모바일 옵션버튼
			$(".b-opt-btn").click(function () {
				$(this).next(".b-opt-box").toggle();
			});

			//ie브라우저 체크
			/*
			ua = window.navigator.userAgent;
			isIe = /MSIE|Trident/.test(ua);

			if (isIe) {
				if($(document).has('.bn-list-person01').length > 0){
					$('.bn-list-person01 .b-img-box').each(function(){
						var personImg01 = $(this).find('img').attr('src');
						if(personImg01.includes('(')){
							var personImgPure01 = personImg01.replace(/\(/g, '\\(').replace(/\)/g, '\\)');

							$(this).attr('background-image', personImgPure01);
							console.log(personImgPure01);
						}

					});
				}
			}*/

			//인물소개 팝업
			$(".bn-list-person02 .b-person-box").click(function () {
				$(".bn-list-person02 .b-pop-wrap").fadeIn();
				$(".bn-list-person02 .b-pop-bg").fadeIn();
				$("body").css({overflow: "hidden"});
				$(".bn-list-person02 .b-pop-wrap > div > div > div:nth-of-type(2), .bn-list-person02 .b-pop-wrap > div > div").scrollTop("0");
			});

			$(".bn-list-person02 .b-pop-wrap .b-close").click(function () {
				$(".bn-list-person02 .b-pop-wrap").fadeOut();
				$(".bn-list-person02 .b-pop-bg").fadeOut();
				$("body").css({overflow: "auto"});
			});

			$(".bn-list-person02 .b-modify").click(function(e){
				e.stopPropagation();
			});

			// lnb type03 하위 메뉴(depth03)가 있는 lnb에 open 아이콘 추가
			$('.lnb-menu > li').each(function () {
				if ($(this).find('.lnb-depth03').length > 0) {
					$(this).addClass('depth02');
				}
			});

			// bn-view-common02 - 이미지 carousel control 제어
			if($(document).has('.b-img-carousel-box').length > 0){
				$('.b-img-thumb-box .owl-carousel').on('initialized.owl.carousel translated.owl.carousel', function(e) {
					var imgSrc = $(this).find('.owl-item.center .b-thumb a img').attr('src');

					$('.b-img-view-box .b-view-img').find('img').attr({'src' : imgSrc});
					$('.b-img-view-box .b-view-img').find('a').attr({'href' : imgSrc});
				});

				$('.b-img-carousel-box .b-img-view-box .control-wrap').find('a').click(function(e){
					e.preventDefault();
					if($(this).hasClass('prev')){
						$(this).parents('.b-img-carousel-box').find('.owl-carousel').trigger('prev.owl.carousel');
					}else{
						$(this).parents('.b-img-carousel-box').find('.owl-carousel').trigger('next.owl.carousel');
					}
				});

				$('.b-img-thumb-box .b-thumb').find('a').click(function(e){
					e.preventDefault();
					var thumbIdx = $(this).parents('.owl-item').index();

					$(this).parents('.b-img-carousel-box').find('.owl-carousel').trigger('to.owl.carousel', [thumbIdx, 300]);
				});
			}

			// 교육과정 > 교과목개요 팝업
			if($(document).has('.b-subject-popup-box').length > 0){
				$('.b-subject-popup-btn').click(function(){
					var $this = $(this).siblings('.b-subject-popup-outer');
					if($this.length > 0){
						$this.show();
					}
					if($this.length == 0){$('.b-subject-popup-outer').show();}

				});

				$('.b-subject-popup-close').click(function(){
					$('.b-subject-popup-outer').hide();
				});
			}

			// 교과목개요 - 과목명 클릭 시 컨텐츠 슬라이드다운
			if($(document).has('.bn-subject01').length > 0){
				$('.b-subject-box dl:first dd').show();

				$('.b-subject-box dl dt').find('a').click(function(e){
					e.preventDefault();

					if($(this).parents('dl').find('dd').is(':visible') == true){
						$(this).parents('dl').find('dd').slideUp();
					}else{
						$('.b-subject-box dl dd').slideUp();
						$(this).parents('dl').find('dd').slideDown();
					}
				});
			}

			// 교수소개02 - 과목명 클릭 시 컨텐츠 슬라이드다운
			if($(document).has('.bn-list-person02').length > 0){				
				$('.bn-list-person02 .b-prof-con-box .b-btn-box').find('.b-more').click(function(e){
					e.preventDefault();
					$(this).parents('.b-prof-main-box').next('.b-prof-detail-box').slideDown();
				});
				$('.bn-list-person02 .b-prof-detail-box .b-btn-box').find('.b-detail-close').click(function(e){
					e.preventDefault();
					$(this).parents('.b-prof-detail-box').slideUp();
				});
			}

			// 회의실예약 레이어팝업
			/*
			$('.show-rev').on('click', function (e) {
                e.stopPropagation();
                $('.popup-wrap').fadeIn(300);
                //$('body').addClass('over-hidden');
            });
            $('.btn-popup-close, .btn-popup-cancel').on('click', function () {
                $('.popup-wrap').fadeOut(300);
                //$('body').removeClass('over-hidden');
            });
            $('.popup-box').on('click', function (e) { // 팝업 영역 클릭시 버블링 닫힘 막기
                e.stopPropagation();
            });
            $(document).on('click', function () { // 팝업 이외 클릭시 팝업 닫기
                $('.popup-wrap').fadeOut(300);
                //$('body').removeClass('over-hidden');
            });
			*/

			/* 교수소개 write 더보기 버튼 제어 */
			$('.bn-write-person01.type01 .b-btn-more-detail').click(function(e){
				e.preventDefault();
				if($(this).hasClass('open')){
					$(this).removeClass('open').html('보기').attr('title','보기');
				}else{
					$(this).addClass('open').html('닫기').attr('title','닫기');
				}
			});
		}
	}
}();

//===================================================
//Board SelectBox
//===================================================
App.BoardSelectBox = function () {
	var self;
	var $box;
	return {
		init: function () {
			self = this;
			$box = $(".b-sel-box");

			$box.each(function () {
				var $thisBox = $(this);
				$thisBox.click(self.onClick);


				$(document).mouseup(function (e) {
					if ($thisBox.has(e.target).length === 0) {
						$thisBox.removeClass("close");
					}
				});
			});

		},
		onClick: function () {
			if ($(this).find("ul").is(":hidden")) {
				$(this).addClass("close");
			} else if ($(this).find("ul").is(":visible")) {
				$(this).removeClass("close");
			}

			$(this).mouseleave(function () {
				$(this).removeClass("close");
			});
		}
	}
}();

//------------------------------------------------------
//Category select box
//------------------------------------------------------
App.CateSelectBox = function () {
	var self;
	var $tabSel, $mTab;
	return {
		init: function () {
			self = this;
			$tabSel = $('.sel-category');
			$mTab = $(".b-category01-m");

			var select_name = $('.sel-category').children('option:selected').text();
			$('.sel-category').siblings('label').text(select_name);

			$mTab.click(self.onClick);
		},
		onClick: function(){
			$mTab.toggleClass("active");
			$(".sel-category").blur(function(){
				$mTab.removeClass("active");
			});
		}
	}
}();

//------------------------------------------------------
//object-fit(IE)
//------------------------------------------------------  
App.ObjectFit = function(){
	var self;
	return {
		init: function(param){
			if('objectFit' in document.documentElement.style === false) {
				var container = document.querySelectorAll(param);
				for(var i = 0; i < container.length; i++) {
					var imageSource = container[i].querySelector('img').src;
					container[i].querySelector('img').style.display = 'none';
					container[i].style.backgroundSize = 'cover';
					container[i].style.backgroundImage = 'url(' + imageSource + ')';
					container[i].style.backgroundPosition = '50% 0';
				}
			}
		}
	}
};

//======================================================================
//CampusMap
//======================================================================
App.CampusMap = function(){
	var self;

	return {
		init: function(){
			self = this;

			// 인포 영역 열기/닫기
			$('.btn-info').on('click', function() {
				$('.map-info-wrap, .map-view-wrap').toggleClass('close');
			});

			// 팝업 스크롤바
			if($('.map-view-box').length > 0) {
				$('.map-view-box .scrollert').scrollert({
					axes: ['y'], 
					'preventOuterScroll': true
				});             
				$(window).resize(function() {
					$('.map-view-box .scrollert').scrollert('update');  
				});
			}

			// 건물/공간정보 팝업 열기
			$('.map-info-list > ul > li > a').on('click', function() {
				$(this).parent().siblings().removeClass('active');
				$(this).parent().addClass('active');
				self.closePopup01();
				$('.cm-popup-wrap.type01').show();
				$('.map-view-box .scrollert').scrollert('update');
			});

			// 건물/공간정보 팝업 닫기
			$('.cm-popup-wrap.type01 .btn-close').on('click', function() {
				$('.map-info-list > ul > li').removeClass('active');
				self.closePopup01();
			});

			// 건물/공간정보 팝업 내 리스트 열기/닫기
			$('.floor-box > ul > li > a').on('click', function() {
				$(this).parent().toggleClass('active');
				$('.map-view-box .scrollert').scrollert('update');
			});

			// 버스 인포영역 아코디언 열기/닫기
			$('.map-bus-list > ul > li > a').on('click', function() {
				$(this).parent().siblings().removeClass('active');
				$(this).parent().addClass('active');
			});
			$('.map-bus-list > ul > li > ul > li > a').on('click', function() {
				$(this).parent().siblings().removeClass('active');
				$(this).parent().addClass('active');
			});

			// 버스 팝업 열기 : 셔틀 버스
			$('.map-bus-list .route02 li a').on('click', function() {
				self.closePopup02();
				$(this).parent().siblings().removeClass('active');
				$(this).parent().addClass('active');
				$('.cm-popup-wrap.type02').show();
			});

			// 버스 팝업 닫기 : 셔틀 버스
			$('.cm-popup-wrap.type02 .btn-close').on('click', function() {
				self.closePopup02();
			});

			// 버스 팝업 열기 : 주변 정류장
			$('.map-view-box .marker-list').on('click', function() {
				$('.cm-popup-wrap.type03').show();
			});

			// 버스 팝업 닫기 : 주변 정류장
			$('.cm-popup-wrap.type03 .btn-close').on('click', function(e) {
				e.stopPropagation();
				$('.cm-popup-wrap.type03').hide();
			});

			$('.map-bus-list button').on('click', function(e) {
				e.stopPropagation();
			});


		},
		closePopup01: function() {
			$('.cm-popup-wrap.type01').hide();
			$('.floor-box > ul > li').removeClass('active');
		},
		closePopup02: function() {
			$('.cm-popup-wrap.type02').hide();
			$('.map-bus-list .route02 li').removeClass('active');
		}
	}
}();