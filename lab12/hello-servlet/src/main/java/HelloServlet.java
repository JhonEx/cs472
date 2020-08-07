import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class HelloServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter pw = response.getWriter();
        int a = Integer.parseInt(request.getParameter("num1"));
        int b = Integer.parseInt(request.getParameter("num2"));
        int sum = a + b;

        int c = Integer.parseInt(request.getParameter("num3"));
        int d = Integer.parseInt(request.getParameter("num4"));
        int mult = c * d;

        pw.print("<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" +
                "<title>Calculator ServLet</title></head><body><form>" );

        pw.print("<input style =\"width:80px\" type=number value="+a+">+<input style =\"width:80px\" type=number value="+b+">=<input type=number value="+sum+" disabled><br><br>");
        pw.print("<input style =\"width:80px\" type=number value="+c+">*<input style =\"width:80px\" type=number value="+d+">=<input type=number value="+mult+" disabled><br><br>");

        pw.print("<button>Submit</button>");
        pw.print("</form></body></html>");
    }

}
