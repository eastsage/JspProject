<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<%@ page language="java" import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
 <%@include file="../../link.txt"%>
 <title>AI소프트웨어학과</title>
 <SCRIPT language="javascript">
  function check() {
   with(document.msgwrite){
    if(subject.value.length == 0){
     alert("제목을 입력해 주세요!!");
     subject.focus();
     return false;
    }
    if(name.value.length == 0){
     alert("이름을 입력해 주세요!!");
     name.focus();
     return false;
    }
    if(password.value.length == 0){
     alert("비밀번호를 입력해 주세요!!");
     password.focus();
     return false;
    }
    if(content.value.length == 0){
     alert("내용을 입력해주세요!!");
     content.focus();
     return false;
    }
    document.msgwrite.submit();
   }
  }
 </SCRIPT>
 <link href="filegb.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="container">
 <%@include file="../../menu.jsp"%>

 <%@ include file="dbconn.jsp" %>

 <P>
   <%
 String sql=null;
// Connection con= null;
 PreparedStatement st =null;
 ResultSet rs =null;
 int cnt=0;
 int id = Integer.parseInt(request.getParameter("id"));
 String p= request.getParameter("page");


 try {
  sql = "select * from gallery where id=? ";
  st = con.prepareStatement(sql);
  st.setInt(1, id);
  rs = st.executeQuery();
  if (!(rs.next()))  {
   out.println("해당 내용이 없습니다");
  } else {
%>
 <div class="container text-center">
  <FORM name="msgwrite" method=POST action="gallery_upddb.jsp?id=<%=id%>&page=<%=p%>">
   <div class="form-group">
    <hr style="border: solid 1px green;">
    <h3 class="text-center bg-info">글 수정하기</h3>
    <hr style="border: solid 1px green;">
   </div>
   <div class="form-group row" >
    <label class="col-2">이름</label>
    <div class="col-6">
     <input type=text name=name value="<%=rs.getString("name")%>" class="form-control">
    </div>
   </div>
   <div class="form-group row" >
    <label class="col-2">E-mail</label>
    <div class="col-6">
     <input type="text" id="email" value="<%=rs.getString("email")%>" name="email" class="form-control">
    </div>
   </div>
   <div class="form-group row" >
    <label class="col-2">제목</label>
    <div class="col-10">
     <input type="text" id="subject"  value="<%=rs.getString("subject")%>"name="subject" class="form-control">

    </div>
   </div>
   <div class="form-group row" >
    <label class="col-2">내용</label>
    <div class="col-10">
     <textarea cols="65" rows="10" id="content"  name="content" class="form-control"><%=rs.getString("content")%></textarea>
    </div>
   </div>
   <div class="form-group row" >
    <label class="col-2">암호</label>
    <div class="col-6">
     <input type="password" id="password"  name="password" class="form-control">
    </div>
    <div class="offset-md-2 col-12">
     (정확한 비밀번호를 입력해야만 수정이 됩니다.)
    </div>
   </div>
   <div class="form-group" >
    <hr style="border: solid 1px green;">
   </div>
   <div class="form-group row">
    <div class="col-12" style="display:inline-block; text-align:center;">
     <a href="#" onClick="check();"><img src="image/ok.gif" border="0" class="img-fluid"></a>
     &nbsp;&nbsp;
     <a href="#" onClick="history.go(-1)"><img src="image/cancle.gif" border="0" class="img-fluid"></a>
     &nbsp;&nbsp;
     <A href="gallery_list.jsp?go=<%=request.getParameter("page")%>"> <img src="image/list.jpg" border=0 class="img-fluid"></a>
    </div>
   </div>
  </form>
  <%
    }
    st.close();
    con.close();
   } catch (SQLException e) {
    out.println(e);
   }
  %>
 </div>

 <%@include file="../../footer.jsp"%>
</div>
</body>
</html>

