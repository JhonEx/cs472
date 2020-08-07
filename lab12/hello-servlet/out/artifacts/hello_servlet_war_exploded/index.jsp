<%--
  Created by IntelliJ IDEA.
  User: jhonr
  Date: 8/6/2020
  Time: 11:15 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
  <html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Calculator Servlet </title>
  </head>
  <body>

  <form action="hello" method="post">
    <input style ="width:80px" name="num1" type="number" required> + <input style ="width:80px" name="num2" type="number" required>=<input name="sumResult" type="number" disabled><br><br>
    <input style ="width:80px" name="num3" type="number" required> * <input style ="width:80px" name="num4" type="number" required>=<input name="mulResult" type="number" disabled><br><br>
    <button>Submit</button>
  </form>

  </body>
  </html>


