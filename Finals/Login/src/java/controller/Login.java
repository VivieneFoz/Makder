/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import static java.io.FileDescriptor.out;
import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.System.out;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.catalina.connector.Response;

/**
 *
 * @author User
 */
@WebServlet(name = "Login", urlPatterns = {"/Login"})
public class Login extends HttpServlet {

    private boolean password;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */  
     String _username = request.getParameter("username");
     String _password = request.getParameter("password");
     if{ _username != null && password != ''}{
            response.sendRedirect("http://localhost/Login/index.html");
        }
           Response lg = mo.executeQuery("Select * from login");
             ArrayList<String> li = new ArrayList<String>();
             ArrayList<string> li2 = new ArrayList<string>();
             if{_username.equals("li.getParameter(username)") && _password.equals("li2.getParameter(password)")}
            response.sendRedirect("http://localhost/Login/home.jsp");
           }else{
           out.println("Incorrect password or username");
           }
    @Override
    protected void doPost(HttpServletRequest request = null, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    
    }

    private static class mo {

        private static Response executeQuery(String select__from_login) {
            throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        }

        public mo() {
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
  