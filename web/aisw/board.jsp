<%--
  Created by IntelliJ IDEA.
  User: dong
  Date: 2022/06/07
  Time: 11:09 오후
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" pageEncoding="UTF-8" %>
<%@include file="./community/freeboard/dbconn.jsp"%>
<%@ page import="java.util.Vector" %>
<link href="fboard.html" rel="stylesheet" type="text/css">

<link defer rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/_res/_common/css/cms.css" />
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/_res/knu/_share/css/announcement-mini-board-template-08-representative.widget1270.css" />
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/_res/knu/aisw/css/main3d9d.css" />
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/_res/knu/aisw/css/main-content01.content7204.css" />
<script defer type="text/javascript" src="${pageContext.request.contextPath}/_res/_common/js/cms.js"></script>
<script defer type="text/javascript" src="${pageContext.request.contextPath}/_res/knu/aisw/js/main-content01.content7204.js" ></script>

</HEAD>
<BODY>
<%
    String content;
    String idate;
    String idate_yymm;
    String idate_dd;
    String subject;

    int keyid;

    String em=null;
//  Connection con= null;
    Statement st =null;
    ResultSet rs =null;
    //마지막에 rs, st, con순으로 잊지않고 닫기

%>



<div class="main-content-wrap01 cms-edit" id="cms-content">


    <div class="main-content-box main-content-box01">
        <div class="main-mini-wrap">
            <div class="main-mini-box main-mini-box01">
                <div class="mini-tab-box">
                    <ul>
                        <li class="active"><a class="mini-board-tab " href="#a" title="공지사항">공지사항</a>
                            <div class="mini-board-content">
                                <div class="main-notice-box temp08">
                                    <ul>
                                        <%
                                            try {
                                                st = con.createStatement();
                                                String sql = "select * from freeboard order by" ;
                                                sql = sql + " masterid desc, replynum, step, id" ;
                                                rs = st.executeQuery(sql);
                                                if (!(rs.next()))  {
                                                    out.println("<li>게시판에 올린 글이 없습니다</li>");
                                                } else {
                                                    int count=0;
                                                    do {
                                                        keyid = (new Integer(rs.getInt("id")));
                                                        idate = rs.getString("inputdate");
                                                        idate_yymm = idate.substring(0,5).replace("-",".");
                                                        idate_dd = idate.substring(6,8);
                                                        subject = (rs.getString("subject"));
                                                        content = (rs.getString("content"));
                                                        count++;
                                                        out.print("<li>");
                                                        out.print("<p class=\"mini-date\"><span>" + idate_dd + "</span>" + idate_yymm + "</p>");
                                                        out.print("<div class=\"mini-txt-box\">");
                                                        out.print("<p class=\"mini-title\"><a href=\"community/freeboard/freeboard_read.jsp?table=freeboard&amp;id=" + keyid + "&amp;page=1\" title=\"자세히보기\">" + subject + "</a></p>");
                                                        out.print("<p class=\"mini-txt\"><a href=\"community/freeboard/freeboard_read.jsp?table=freeboard&amp;id=" + keyid + "&amp;page=1\" title=\"자세히보기\">" + content + "</a></p>");
                                                        out.print("</div>");
                                                        out.print("</li>");
                                                    }while(rs.next() && !(count==3));
                                                }
                                            } catch (SQLException e) {
                                                out.println(e);
                                            }
                                        %>
                                    </ul>
                                </div>
                            </div><a class="btn-more" href="community/freeboard/freeboard_list.jsp?table=freeboard" title="공지사항 바로가기 ">더보기</a>
                        </li>


                        <li><a class="mini-board-tab" href="#a" title="갤러리">갤러리</a>
                            <div class="mini-board-content">
                                <div class="main-notice-box temp08">
                                    <ul>
                                        <%
                                            try {
                                                st = con.createStatement();
                                                String sql = "select * from gallery order by" ;
                                                sql = sql + " masterid desc, replynum, step, id" ;
                                                rs = st.executeQuery(sql);
                                            if (!(rs.next()))  {
                                                out.println("<li>게시판에 올린 글이 없습니다</li>");
                                            } else {
                                                int count=0;
                                                do {
                                                    keyid = (new Integer(rs.getInt("id")));
                                                    idate = rs.getString("inputdate");
                                                    idate_yymm = idate.substring(0,5).replace("-",".");
                                                    idate_dd = idate.substring(6,8);
                                                    subject = (rs.getString("subject"));
                                                    content = (rs.getString("content"));
                                                    count++;
                                                    out.print("<li>");
                                                    out.print("<p class=\"mini-date\"><span>" + idate_dd + "</span>" + idate_yymm + "</p>");
                                                    out.print("<div class=\"mini-txt-box\">");
                                                    out.print("<p class=\"mini-title\"><a href=\"community/freeboard/gallery_read.jsp?table=gallery&amp;id=" + keyid + "&amp;page=1\" title=\"자세히보기\">" + subject + "</a></p>");
                                                    out.print("<p class=\"mini-txt\"><a href=\"community/freeboard/gallery_read.jsp?table=gallery&amp;id=" + keyid + "&amp;page=1\" title=\"자세히보기\">" + content + "</a></p>");
                                                    out.print("</div>");
                                                    out.print("</li>");
                                                }while(rs.next() && !(count==3));
                                            }
                                            } catch (SQLException e) {
                                            out.println(e);
                                            }
                                        %>
                                    </ul>
                                </div>
                            </div><a class="btn-more" href="community/freeboard/freeboard_list.jsp?table=gallery" title="갤러리 바로가기 ">더보기</a>
                        </li>
                    </ul>
                </div>
            </div>



            <div class="main-mini-box main-mini-box02">
                <h3 class="main-title">서식자료실</h3>
                <div class="main-notice-box temp08">
                    <ul>

                        <%
                            try {
                                st = con.createStatement();
                                String sql = "select * from dataroom order by" ;
                                sql = sql + " masterid desc, replynum, step, id" ;
                                rs = st.executeQuery(sql);
                                if (!(rs.next()))  {
                                    out.println("<li>게시판에 올린 글이 없습니다</li>");
                                } else {
                                    int count=0;
                                    do {
                                        keyid = (new Integer(rs.getInt("id")));
                                        idate = rs.getString("inputdate");
                                        idate_yymm = idate.substring(0,5).replace("-",".");
                                        idate_dd = idate.substring(6,8);
                                        subject = (rs.getString("subject"));
                                        content = (rs.getString("content"));
                                        count++;
                                        out.print("<li>");
                                        out.print("<p class=\"mini-date\"><span>" + idate_dd + "</span>" + idate_yymm + "</p>");
                                        out.print("<div class=\"mini-txt-box\">");
                                        out.print("<p class=\"mini-title\"><a href=\"community/freeboard/dataroom_read.jsp?table=dataroom&amp;id=" + keyid + "&amp;page=1\" title=\"자세히보기\">" + subject + "</a></p>");
                                        out.print("<p class=\"mini-txt\"><a href=\"community/freeboard/dataroom_read.jsp?table=dataroom&amp;id=" + keyid + "&amp;page=1\" title=\"자세히보기\">" + content + "</a></p>");
                                        out.print("</div>");
                                        out.print("</li>");
                                    }while(rs.next() && !(count==3));
                                    rs.close();
                                }
                                st.close();
                                con.close();
                            } catch (SQLException e) {
                                out.println(e);
                            }
                        %>

                    </ul>
                </div>


                <a class="btn-more" href="${pageContext.request.contextPath}/aisw/community/freeboard/freeboard_list.jsp?table=dataroom" title="서식자료실 바로가기 ">더보기</a>
            </div>
        </div>




    </div>

    <br><br><br><br>

</BODY>
</HTML>
