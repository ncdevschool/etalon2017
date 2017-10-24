<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
<script src="resources/js/custom/loadSimpleData.js"></script>
<body>
<jsp:include page="/jsp/blocks/header.jsp"/>

<div class="container">
    <jsp:include page="/jsp/blocks/title.jsp">
        <jsp:param name="heading" value="Welcome on login page" />
    </jsp:include>

    <div class="row">
        <div class="col">
        </div>
        <div class="col login-border">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input">
                        Remember me
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="button" class="btn btn-secondary">Register</button>
            </form>

        </div>
        <div class="col">  </div>
    </div>
    <br>
    <div>
        <h3>Printing data using model and view</h3>
        <div class="jsDataUsingModelAndView">
            <c:if test="${not empty students}">
                <c:forEach items="${students}" var="student">
                    ${student.studentId} | ${student.username} | ${student.email}  <br>
                </c:forEach>
            </c:if>
        </div>
    </div>
    <div>
        <h3>Printing data using js & ajax</h3>
        <div class="jsDataUsingAjax">
        </div>
    </div>

</div>
</body>
</html>
