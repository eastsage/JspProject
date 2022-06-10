<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
	<%@include file="../link.txt"%>
	<title>교수 | Al소프트웨어학과</title>
</head>
<body class=" aisw-site pc temp08">
<div class="container">
	<%@include file="../menu.jsp"%>

	<div class="container">
		<p class="h2 font-weight-bold">교수</p>
		<br>

		<nav class="text-right">
			<a href="professor.jsp" class="btn btn-outline-success my-2 my-sm-0" title="목록">목록</a>
		</nav>
		<hr>

		<div class="row">
			<div class="col-sm-2">
				<img alt="최승교 프로필 사진" width="110%" height="80%" src="../../_attach/gyosupic/thumb_최승교교수님.png"  onerror="this.src='../../_res/knu/_share/img/board/img-faculty-default.gif'"/>
			</div>
			<div class="col-sm-10">
				<div>
					<ul>
						<li>
							<span>성명</span>
							<p>
								<span class="b-name">
									최승교
								</span>

								<span>교수</span>
							</p>
						</li>
						<li>
							<span>연구분야</span>
							<p>
								<span>컴퓨터구조/성능평가/센서네트워크/컴퓨터통신</span>
							</p>
						</li>
						<li>
							<span>연구실</span>
							<p>
								<span>5공학관 416호</span>
							</p>
						</li>
						<li>
							<span>연락처</span>
							<p>
								<a href="tel:033-570-6375" title="전화걸기">033-570-6375</a>
							</p>
						</li>
						<li>
							<span>이메일</span>
							<p>
								<a href="mailto:skchoi@kangwon.ac.kr" title="메일 보내기">skchoi@kangwon.ac.kr</a>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr>

		<div>

			<div>
				<div class="row">
					<div class="col-sm-6 text-center">
						<a href="#paper" class="tabLink" data-id="thesis" title="주요논문">
							주요논문
						</a>
					</div>
					<div class="col-sm-6 text-center">
						<a href="#pager" class="tabLink" data-id="book" title="저서">
							저서
						</a>
					</div>
				</div>
				<br>
				<iframe title="업적" onload="iframeLoaded()" class="iframe-full-height" id="reportFrame" src="professor96ac96ac.html?mode=report&amp;key=$cms$IwBlE4g&amp;reportType=thesis&amp;siteId=" scrolling="no" width="100%;"  frameBorder="0" style="margin: 0 auto;max-width: 1240px; display: block;"></iframe>
				<input type="hidden" id="iframeUrl" value="?mode=report&amp;key=$cms$IwBlE4g&amp;reportType=thesis&amp;siteId=" />

			</div>

		</div>


	</div>

	<script type="text/javascript">
		//<![CDATA[

		function iframeLoaded() {
			var iFrameID = document.getElementById('reportFrame');
			if(iFrameID) {
				// here you can make the height, I delete it first, then I make it again
				iFrameID.height = "0";
				iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + 30 + "px";
			}
			$("iframe").focus();
		}


		function changeTab(value){

			var type = value;

			var url = $("#iframeUrl").val();

			var makeUrl = makeIframeUrl( url, type );

			document.getElementById("reportFrame").src = makeUrl;

			$(".b-main-tab li").removeClass("active");
			$(this).parent().addClass("active");

			//var lebelText = $(".b-tab-sel option:selected").text();
			//$("#tab-select-label").text( lebelText   );

		}

		function makeIframeUrl ( url, type ) {

			var tmp = url.toString().split("?"), makeUrl = tmp[0] + '?';

			if( typeof(tmp[1]) != 'undefined' ) {

				var s = tmp[1].toString().split('&'), idx = 0;

				for( var i = 0 ; i < s.length; i++ ) {

					strArr = s[i].split('=');

					if( strArr[0] != 'reportType') {

						if( idx != 0 ) {
							makeUrl = (makeUrl + '&');

						}

						idx += 1;
						makeUrl = (makeUrl + s[i]);
					}
				}

				makeUrl = (makeUrl + '&reportType=' + type);

			} else {

				makeUrl = url + "&reportType=" + type;

			}

			return makeUrl;
		}

		$(function(){

			$(".tabLink").click(function(e){

				e.preventDefault();

				var type = $(this).attr("data-id");

				var url = $("#iframeUrl").val();

				var makeUrl = makeIframeUrl( url, type );

				document.getElementById("reportFrame").src = makeUrl;

				$(".b-main-tab li").removeClass("active");
				$(this).parent().addClass("active");

			});


			if( $(".b-main-tab li.active").length == 0 ){

				$(".b-main-tab li:first").addClass("active");
			}


		});


		//]]>
	</script>


	<%@include file="../footer.jsp"%>
</div>
</body>
</html>




