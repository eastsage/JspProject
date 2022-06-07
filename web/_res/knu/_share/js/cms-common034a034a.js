$(document).ready(function(){
	$('html').removeClass('no-js');

	// scrollert 실행
	if($(document).find('.scrollert').length > 0){
		setTimeout(function(){
			$('.scrollert').scrollert({
				preventOuterScroll: false,
				cssPrefix: 'scrollert',
				eventNamespace: 'scrollert',
				contentSelector: null
			});
		}, 20);

		$(window).resize(function () {
			setTimeout(function () {
				$('.scrollert').scrollert('update');
			}, 50);
		});
	}

	App.ShareCommon.init();

	// table scroll 실행
	if($(document).find('.scrollbox').length > 0){
		App.TableScroll.init('knu');
	}

	/* 이미지 확대축소 */
	if($(document).find('.zoom').length > 0){
		App.imgZoom.init('knu');
	}

	if($(document).has('.sub-visual-wrap').length > 0){
		App.subVisualNum.init();
	}

	//클립보드 url 복사
	if($(document).find('.share').length > 0){
		App.clipBoardCopy.init();
	}
	
});


//-----------------------------------------------------------------------------------------
//Common
//-----------------------------------------------------------------------------------------
App.ShareCommon = function () {
	var self;
	return {
		init: function () {
			// top 버튼 클릭
			$('.top-btn').click(function(e){
				e.preventDefault();
				$(window).off('scroll');
				$('html, body').stop().animate({
					scrollTop : 0
				}, 300);
			});

			// swiper-carousel 컨텐츠 1개일 때 제어
			if($(document).has('.swiper-container').length > 0){
				$('.swiper-container').each(function(){					
					if($(this).find('.swiper-slide:not(.swiper-slide-duplicate)').length === 1){  //공유사이트의 cms-common.js가 먼저 실행되기 때문에 length를 3이 아닌 1로 적용
						$(this).find('.swiper-wrapper').addClass("disabled");
					}					
				});
			}

			// 레이어팝업
			if($(document).has('.layer-popup-wrap').length > 0){
				/*
				if($('.layer-popup-outer').find('.layer-popup-wrap').length > 0){
					$('.layer-popup-outer').addClass('on');
				}else{
					$('.layer-popup-outer').removeClass('on');
				}
				*/
				
				if($('.layer-popup-outer').find('.layer-popup-wrap.hide-important').length > 0){
					$('.layer-popup-outer').removeClass('on');
				}else{
					$('.layer-popup-outer').addClass('on');
				}
				
				$('.btn-layer-close').click(function(){
					var layerLeng = $('.layer-popup-outer').find('.layer-popup-wrap:visible').length;

					if(layerLeng === 0){
						$('.layer-popup-outer').removeClass('on');
						$('.layer-popup-outer').hide();
					}
				});
			}

			// 테이블 css 링크 제거(head) - table.css 중복적용 방지
			if($(document).has('link[href*="table.css"]').length > 0){
				$('link[href*="table.css"]').remove();
			}

		}
	}
}();

//-----------------------------------------------------------------------------------------
//서브비주얼
//-----------------------------------------------------------------------------------------
App.subVisualNum = function () {
	var self;
	return {
		init: function () {
			
			if($('.gnb-ul > li').children('.active').length === 0) return;
			
			subIndex = $('.gnb-ul > li').children('.active').parents('li').index() + 1;
			$('.sub-visual-wrap').addClass('sub-visual-wrap0' + subIndex);				
			
		}
	}
}();

//------------------------------------------------------
//object-fit(IE)
//------------------------------------------------------  
App.ObjectFit = function () {
	var self;
	return {
		init: function (param) {
			if ('objectFit' in document.documentElement.style === false) {
				var container = document.querySelectorAll(param);
				for (var i = 0; i < container.length; i++) {
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

//------------------------------------------------------
//table scroll
//------------------------------------------------------  
App.TableScroll = function(){
	return {
		init: function(cmsId){			
			// 테이블에 .scrollbox 클래스 사용 시 스크롤 이미지 적용
			if($(document).has('.table-wrap.scrollbox').length > 0){

				var tableScrollImg = '<div class="msg-touch-help"><img src="/_res/' + cmsId + '/_share/img/common/ico-table-scroll.png" alt=""></div>';
				$('.table-wrap.scrollbox').find('.msg-touch-help').remove(); // 마크업 상에 기 작성된 테이블 스크롤 이미지 삭제(스크롤이미지 중복 방지 목적)
				$('.table-wrap.scrollbox').append(tableScrollImg); // 새로 추가(마크업 작성 시 스크롤이미지가 없었던 테이블까지 모두 추가하기 위함.)
			}

			$(".scrollbox").scroll(function() {
				$(this).find(".msg-touch-help").fadeOut();
			});
		}
	}
}();

//------------------------------------------------------
//image zoom
//------------------------------------------------------  
App.imgZoom = function(){
	return {
		init: function(cmsId){            
			// 이미지 박스에 .zoom 클래스 사용 시 확대 이미지 적용
			if($(document).has('.img-box.zoom').length > 0){
				var imgSrc = $('.img-box.zoom > img').attr('src');
				var imgZoomIn = '<a href="'+ imgSrc +'" class="zoom-in pc-hide" title="새창열림" target="_blank"><img src="/_res/' + cmsId + '/_share/img/common/btn-enlargement.gif" alt=""></a>';
				$('.img-box.zoom').append(imgZoomIn);
			}

		}
	}
}();




//-----------------------------------------------------------------------------------------
//클립보드 url 복사  
//-----------------------------------------------------------------------------------------
App.clipBoardCopy = function () {
	var self;
	return {
		init: function () {
			
  			// 클립보드 객체 생성
        	$('a#url-copy').click(function(){
				//
				var url = '';
				var textarea = document.createElement("textarea");
				document.body.appendChild(textarea);
				url = window.document.location.href;
				textarea.value = url;
				textarea.select();
				document.execCommand("copy");
				document.body.removeChild(textarea);
				alert("URL이 복사되었습니다.")
			});

		},
		// URL 복사 
		urlCopy : function(){

			if( $('.url-copy').length > 0 ) {
				loadJavascript ( '/_custom/knu/resource/js/clipboard.min.js');
				var $this = $('.url-copy');
				//e.preventDefault();

				$this.attr('data-clipboard-text', window.document.location.href);

				var clipboard = new ClipboardJS('.url-copy');
				clipboard.on('success', function(e){
					alert('URL이 복사되었습니다.');
					e.clearSelection();
				});

				clipboard.on('error', function(e){
					alert($m('해당 기능을 지원하지 않는 브라우저입니다.'));
				});
			}
		}
	}
}();

