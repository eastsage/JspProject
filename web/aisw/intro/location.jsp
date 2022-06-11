<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
	<%@include file="../link.txt"%>
	<title>AI소프트웨어학과</title>
</head>
<body>
<div class="container">
	<%@include file="../menu.jsp"%>
	<link href="../../_res/knu/_share/css/cms-commonb50f.css" defer rel="stylesheet" type="text/css" />
	<link rel="stylesheet" type="text/css" href="../../_res/knu/aisw/css/location.content350a.css" />

	<div class="container">
		<p class="h2 font-weight-bold">오시는 길</p>
		<br>


		<div class="content-box">
			<div class="con-box no-pd">
				<div class="location-box">
					<div class="location-map-box">

						<div id="daumRoughmapContainer1629687331905" class="root_daum_roughmap root_daum_roughmap_landing"></div>

						<script charset="UTF-8" class="daum_roughmap_loader_script" src="../../ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

						<!-- 3. 실행 스크립트 -->
						<script charset="UTF-8">
							new daum.roughmap.Lander({
								"timestamp" : "1629687331905",
								"key" : "273ne",
								"mapWidth" : "640",
								"mapHeight" : "360"
							}).render();
						</script>
					</div>
					<div class="location-con-box">
						<p>AI소프트웨어학과 안내</p>
						<div>
							<div>
								<dl>
									<dd>전화번호</dd>
									<dd><a href="tel:033-570-6370" title="전화걸기">033-570-6370</a>, <a href="tel:033-570-6340" title="전화걸기">6340</a>, <a href="tel:033-570-6580" title="전화걸기">6580</a></dd>
								</dl>
								<dl>
									<dd>팩스번호</dd>
									<dd>033-570-6379, 6589</dd>
								</dl>
								<dl>
									<dd>위치</dd>
									<dd>25913 강원도 삼척시 중앙로 346 강원대학교 삼척캠퍼스 제 5공학관 5층 510호,511호</dd>
								</dl>
							</div>
							<div>
								<dl>
									<dd>오시는 길</dd>
									<dd>
										<ul class="ul-type02">
											<li>고속도로 : 영동ㆍ동해고속도로 : 서울 &rarr; 강릉 &rarr; 동해 &rarr; 삼척</li>
											<li>시외버스 : 강남(영동선) &rarr; 삼척ㆍ동해&rarr; 삼척 &rarr; 본대학</li>
											<li>기차 : 청량리 &rarr; 동해역 &rarr; 본대학(시내버스)</li>
											<li>자가용 : 서울 &rarr; 중부 고속도로 or 경부 고속도로 &rarr; 영동 고속도로 &rarr; 삼척</li>
										</ul>
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	</div>

	<%@include file="../footer.jsp"%>
</div>
</body>
</html>


