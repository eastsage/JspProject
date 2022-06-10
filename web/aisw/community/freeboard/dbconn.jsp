<%@ page import="java.sql.*"%>
<%
	Connection con = null;

	String url = "jdbc:mariadb://localhost:3306/fboard";
	String user = "root";
	String password = "aosldk12";

	Class.forName("org.mariadb.jdbc.Driver");
	con = DriverManager.getConnection(url, user, password);
%>