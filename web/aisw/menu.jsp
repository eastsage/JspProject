<%--
  Created by IntelliJ IDEA.
  User: idonghyeon
  Date: 2022/04/24
  Time: 2:46 오후
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" pageEncoding="UTF-8" %>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <nav class="bottom-header-box">
            <h1><a href="index.html" title="홈 바로가기">
                <div><img src="${pageContext.request.contextPath}/_res/knu/_share/img/common/img-logo.png" alt="KNU"><span class="logo-txt">AI소프트웨어학과</span></div>
                <p class="logo-bottom">KANGWON NATIONAL UNIVERSITY</p></a></h1>
        </nav>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="dropdown-content nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        학과소개
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/intro/greetings.html">인사말</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/intro/history04.html">학과연혁</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/intro/intro.html">학과소개</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/intro/lab.html">실습실소개</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/intro/circle.html">동아리소개</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/intro/council.html">학생회소개</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/intro/location.html">오시는 길</a>
                    </div>
                </li>
                <li class="dropdown-content nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        교수소개
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/professor/professor.html" id="pc-gnb-menu-8088" title="교수">교수</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/professor/emeritus-professor.html" id="pc-gnb-menu-8089" title="명예교수">명예교수</a>
                    </div>
                </li>
                <li class="dropdown-content nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        학사안내
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="http://www.kangwon.ac.kr/www/selectBbsNttList.do?bbsNo=37&amp;key=1176&amp;)" id="pc-gnb-menu-8090"  title="학사공지&#40;새창열림&#41;"  target="_blank">학사공지</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/bachelor/curriculum.html" id="pc-gnb-menu-8070" title="교육과정">교육과정</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/bachelor/subject.html" id="pc-gnb-menu-8071" title="편성교과목">편성교과목</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/bachelor/info.html" id="pc-gnb-menu-8077" title="학사정보">학사정보</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/bachelor/calendar.html" id="pc-gnb-menu-8078" title="학사일정">학사일정</a>
                    </div>
                </li>
                <li class="dropdown-content nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        입학안내
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/admission/admission-guide.html" id="pc-gnb-menu-8066" title="모집요강">모집요강</a>
                    </div>
                </li>
                <li class="dropdown-content nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        커뮤니티
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/community/freeboard/freeboard_list35a4.html?table=freeboard">공지사항</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/community/freeboard/freeboard_lista69f.html?table=gallery">갤러리</a>
                        <a class="dropdown-item" href="${pageContext.request.contextPath}/aisw/community/freeboard/freeboard_list8b07.html?table=dataroom">서식자료실</a>
                    </div>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <form class="d-flex">
                &nbsp;<a href="${pageContext.request.contextPath}/aisw/etc/login.html" title="로그인"><button class="btn btn-primary">Login</button></a>&nbsp;&nbsp;
            </form>
        </div>
    </nav>
</div>
