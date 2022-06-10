<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<%@ page language="java" import="java.io.*,java.sql.*,java.util.*" %>
<!DOCTYPE html>
<html>
<head>
	<%@include file="../../link.txt"%>
	<title>AI소프트웨어학과</title>
	<SCRIPT language="javascript">
		function check(){
			with(document.msgdel){
				if(password.value.length == 0){
					alert("비밀번호를 입력해 주세요!!");
					password.focus();
					return false;
				}
				document.msgdel.submit();
			}
		}
	</SCRIPT>
	<link href="filegb.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="container">
	<%@include file="../../menu.jsp"%>


	<div class="container text-center">
		<form name="msgdel" method=post action=dataroom_deldb.jsp>
			<input type="hidden" name="id" value="<%=request.getParameter("id")%>"  >
			<input type="hidden" name="page" value="<%=request.getParameter("page")%>"  >
			<div class="form-group">
				<hr style="border: solid 1px green;">
				<h3 class="text-center bg-info">글 삭제하기</h3>
				<hr style="border: solid 1px green;">
			</div>
			<div class="form-group row" >
				<label class="col-2">비밀번호</label>
				<div class="col-6">
					<input type="password" id="password"  name="password" class="form-control">
				</div>
			</div>
			<hr style="border: solid 1px green;">
			<div class="form-group row">
				<div class="col-12" style="display:inline-block; text-align:center;">
					<a href="dataroom_list.jsp?go=<%=request.getParameter("page")%>"> <img src="image/list.jpg" border=0 class="img-fluid"></a>
					&nbsp;&nbsp;
					<a href="#" onClick="check();"><img src="image/del.jpg" width="46" height="19" border="0"></a>
				</div>
			</div>
		</form>
	</div>


	<%@include file="../../footer.jsp"%>
</div>
</body>
</html>