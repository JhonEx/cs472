package edu.miu.cs.wap.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

@WebServlet(name = "BootLoaderServlet")
public class BootLoaderServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<String> urls = new LinkedList<>();

        urls.add("http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/images/antonio-berardi.jpg");
        urls.add("http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/images/go-go.gif");
        urls.add("http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/images/knit.jpg");
        urls.add("http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/images/thomas-wylde.jpg");
        urls.add("http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/images/frye.jpg");
        urls.add("http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/images/jimmy-choo.jpg");
        urls.add("http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/images/wolverine.jpg");
        urls.add("http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/images/steve-madden.jpg");
        urls.add("http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/images/burton.jpg");
        urls.add("http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/bootloader/images/ugg.jpg");

        PrintWriter out = response.getWriter();
        out.write(urls.get(getRandomNumberInRange(0,urls.size() - 1)));
    }

    private static int getRandomNumberInRange(int min, int max) {

        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }

        Random r = new Random();
        return r.nextInt((max - min) + 1) + min;
    }
}
