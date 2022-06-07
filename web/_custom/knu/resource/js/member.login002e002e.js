var
memberApp = (function() {

	var self;

	return {
		init: function() {

			self = this;
			
			// SSO 로그인
			self.popupSsoLogin();
			
			// 휴대폰 인증 
			self.popupHpAuth();

			// 로그인폼 유효성 체크
			self.loginFormValid();
			
			// 플래시 맵이 존재하면 메시지 출력
			self.showFlashMessage();
			
		},
		// SSO 로그인
		popupSsoLogin : function(){
			
			$('#ssoLogin').on('click', function(e){
				
				e.preventDefault();
				
				//SSO_LOGIN_WINDOW = window.open('https://kcloud.kangwon.ac.kr/login?return_url=' + window.location.protocol + "//" + window.location.host + window.location.pathname + '?mode=ssoLoginProc', 'SSO_LOGIN_WINDOW', 'width=1232, height=821, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250');
				
				SSO_LOGIN_WINDOW = window.open('', 'popupSsoLogin', 'width=1232, height=821, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250');
				
				if (SSO_LOGIN_WINDOW == null) {
					alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
				}
				else {
					SSO_LOGIN_WINDOW.focus();
				}
				
				document.ssoLoginForm.action = 'https://kcloud.kangwon.ac.kr/login';
	    	    document.ssoLoginForm.target = 'popupSsoLogin';
	    	    // document.ssoLoginForm.return_url.value = window.location.protocol + '//' + window.location.host + window.location.pathname;
	    	    //document.ssoLoginForm.return_url.value = window.location.protocol + '//' + window.location.host + '/passni/cms-sso/login-proc.jsp';
	    	    document.ssoLoginForm.return_url.value = window.location.protocol + '//' + window.location.host + '/knu/login/ssoLoginProc.do';
	    	    document.ssoLoginForm.submit();
			});
			

		},
		// 휴대폰 인증 팝업
		popupHpAuth : function(){
			
			$('#btnCertHp').on('click', function(e){
				
				e.preventDefault();
				
				var KMCIS_window;
				var UserAgent = navigator.userAgent;
			    /* 모바일 접근 체크*/
			    // 모바일일 경우 (변동사항 있을경우 추가 필요)
			    if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
			    	document.reqKMCISForm.target = '';
			    } 
  
			    // 모바일이 아닐 경우
			    else {
			    	KMCIS_window = window.open('', 'KMCISWindow', 'width=425, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250');

			    	if(KMCIS_window == null){
			    		alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
			    	}
	
			    	document.reqKMCISForm.target = 'KMCISWindow';
			    }
  
			    //document.reqKMCISForm.action = 'https://www.kmcert.com/kmcis/web/kmcisReq.jsp';
			   // document.reqKMCISForm.submit();
				
			    $.ajax({
					url: '/knu/login/hp/getHpAuthData.do',
					cache: false,
					dataType: 'json',
					success: function ( data ) {
					
						if ( data.success == false ) {
							
							if ( data.sRtnMsg ) {
				    			
				    			alert( data.sRtnMsg );
				    			KMCIS_window.close();
				    			return false;
				    		}
						}
						
						if ( data.success == true ) {
				    		
				    		$("#trCert").val( data.trCert );
				    		$("#trUrl").val( data.trUrl );
				    		
				    		
				    	    document.reqKMCISForm.action = 'https://www.kmcert.com/kmcis/web/kmcisReq.jsp';
				    	   // document.reqKMCISForm.target = 'KMCISWindow';
				    	    document.reqKMCISForm.submit();
				    		
				    	}
						
					}
				});
				
			});
			

		},
		/**
		 * 플래시 맵이 존재하면 메시지 출력
		 */
		showFlashMessage: function() {

			if( $('.flash-map').length > 0 ) {

				$('.flash-map').each(function() {
					// 이전 스크립트에서 호출 했으면 스킵
					if(!$(this).data('flash-map')) {
						alert($(this).text());
						$(this).data('flash-map',true)
					}

				});

			}

		},

		/**
		 * 폼 유효성 검증
		 */
		loginFormValid: function() {

				// 폼유효성 체크
				$('form[name=loginForm]').formValid({
					beforeSubmit: self.validate
				});


		}


	}
})();

$(function() {
	memberApp.init();
});
