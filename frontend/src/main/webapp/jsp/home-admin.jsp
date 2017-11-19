<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%--
  Created by IntelliJ IDEA.
  User: anpi0316
  Date: 06.10.2017
  Time: 15:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login page</title>
</head>
<script src="resources/js/libs/jquery-3.2.1.min.js"></script>
<script src="resources/js/custom/home-admin.js"></script>
<body>
<jsp:include page="/jsp/blocks/header.jsp"/>
<h1> Home page for Admin</h1>

<sec:authentication var="user" property="principal"/>
You are logged as ${user.username}
<br>

<br>
<h2>Create Faculty</h2>
<label class="sr-only" for="inlineFormInput">Name</label>
<input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0 jsFacultyName" id="inlineFormInput" placeholder="">
<div class="alert alert-danger jsNameIncorrectNotification" role="alert" style="display: none"></div>

<button type="submit" class="btn btn-primary jsCreateFaculty">Create</button>


<a href="/logout">Log out</a>
</body>
</html>
