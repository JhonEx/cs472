package edu.miu.cs.wap.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "PetServlet")
public class PetServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String animal = request.getParameter("animal");
        PrintWriter out = response.getWriter();

        String puppies = "<img src =http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/ajaxpets/images/puppy1.jpeg alt = animal>" +
                "    <img src = http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/ajaxpets/images/puppy2.jpeg alt = animal>" +
                "    <img src =http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/ajaxpets/images/puppy3.jpeg alt = animal>" +
                "    <img src = http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/ajaxpets/images/puppy4.jpeg alt = animal>";

        String kitties = "<img src = http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/ajaxpets/images/kitty1.jpeg alt = animal>" +
                "    <img src = http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/ajaxpets/images/kitty2.jpeg alt = animal>" +
                "    <img src = http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/ajaxpets/images/kitty3.jpeg alt = animal>" +
                "    <img src = http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/ajaxpets/images/kitty4.jpeg alt = animal>";

        String output = "";
        if (animal.equals("kitties")) {
            output = kitties;
        } else {
            output = puppies;
        }
        out.write(output);
    }
}
