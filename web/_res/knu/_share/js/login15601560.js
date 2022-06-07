$(document).ready(function(){
	App.LoginTab.init();
	
	//App.popupSsoLogin.init();
});

//------------------------------------------------------
// Login Tab
//------------------------------------------------------
App.LoginTab = function () {
	var self;
	return {
		init: function () {			
			$('.login-tab').on('click', function(e){
				e.preventDefault();
				
				if(!$(this).parent('li').hasClass('active')){
					$('.login-box ul li').removeClass('active');
					$(this).parent('li').addClass('active');
				}
			});
		}
	}
}();

//------------------------------------------------------
// Sso Login
//------------------------------------------------------
App.popupSsoLogin = function () {
	
	var self;
	
	return {
		init : function () {
			
			$('#ssoLogin').on('click', function(e){
				
				e.preventDefault();
				
				SSO_LOGIN_WINDOW = window.open('https://kcloud.kangwon.ac.kr/login?return_url=' + window.location.protocol + "//" + window.location.host + '/knu/ssoLogin.do', 'SSO_LOGIN_WINDOW', 'width=1232, height=821, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250');
				if (SSO_LOGIN_WINDOW == null) {
					alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
				}
				else {
					SSO_LOGIN_WINDOW.focus();
				}
			});
			
		}
	}
}();