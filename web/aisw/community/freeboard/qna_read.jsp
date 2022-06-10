<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<%@ page language="java" import="java.sql.*,java.util.*" %>
<!DOCTYPE html>
<html>
<head>
    <%@include file="../../link.txt"%>
    <TITLE>글 읽기</TITLE>
    <link href="filegb.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="container">
    <%@include file="../../menu.jsp"%>

    <BODY>
    <%@ include file="dbconn.jsp" %>
        <%
    String sql=null;
// Connection con= null;
    PreparedStatement st =null;
    ResultSet rs =null;

    int id = Integer.parseInt(request.getParameter("id"));


    try {
        sql = "select * from qna where id=? ";
        st = con.prepareStatement(sql);
        st.setInt(1, id);
        rs = st.executeQuery();

        if (!(rs.next()))  {
            out.println("해당 내용이 없습니다");
        } else {
            String em=rs.getString("email");
            if ((em != null) && (!(em.equals(""))) )
                em = "<A href=mailto:" +em + ">" + rs.getString("name")+"</A>";
            else
                em = rs.getString("name");
            out.println("<table class='table'>");
            out.println("<thead>");
            out.println("<tr>");
            out.println("<th colspan=\"2\" scope=\"col-12\">제목 : " + rs.getString("subject") + "</th>");
            out.println("<tr>");
            out.println("</thead>");
            out.println("<tboard>");
            out.println("<tr>");
            out.println("<td colspan=\"2\" scope=\"row-12\">글쓴이: "+em+"</td>");
            out.println("</tr>");
            out.println("<tr>");
            out.println("<td width='70%'>작성일 : " + rs.getString("inputdate") + "</td>");
            out.println("<td width='30%'>조회 : "+rs.getInt("readcount")+"</td>");
            out.println("</tr>");
            out.println("</table>");
            out.println("<table>");
            out.println("</td>");
            out.println("</tr>");
            out.println("<tr align='center'>");
            out.println("<hr>");
            out.println("</tr>");
            out.println("<td style='padding:10 0 0 0'>");
            out.println("<div align='left'><br>");
            out.println("<td colspan=\"2\" scope=\"row\">" +rs.getString("content").replaceAll(" ", "&nbsp;").replaceAll("<", "&lt;").replaceAll(">", "&lt;").replaceAll("\n", "<br>") + "</div>");
            out.println("</td>");
            out.println("</tr>");
            out.println("<tr align='center'>");
            out.println("<td class='button' height='1'></td>");
            out.println("</tr>");
            out.println("<tr align='center'>");
            out.println("</tr>");
            out.println("</table>");
            out.println("<hr>");
%>

    <div class="container" style="diplay:inline-block; text-align:center;">
        <td align="right" width="450"><A href="qna_list.jsp?go=<%=request.getParameter("page") %>">
            <img src="image/list.jpg" border=0></a></td>
        <td width="70" align="right"><A href="qna_rwrite.jsp?id=<%= request.getParameter("id")%>&page=<%=request.getParameter("page")%>"> <img src="image/reply.jpg" border=0></A></td>
        <td width="70" align="right"><A href="qna_upd.jsp?id=<%=id%>&page=1"><img src="image/edit.jpg" border=0></A></td>
        <td width="70" align="right"><A href="qna_del.jsp?id=<%=id%>&page=1"><img src="image/del.jpg"  border=0></A></td>
        </tr>
    </div>
        <%
            sql = "update qna set readcount= readcount + 1 where id= ?" ;
            st = con.prepareStatement(sql);
            st.setInt(1, id);
            st.executeUpdate();
        }
        rs.close();
        st.close();
        con.close();
    } catch (SQLException e) {
        out.println(e);
    }
%>

    <%@include file="../../footer.jsp"%>
</div>
</body>
</html>