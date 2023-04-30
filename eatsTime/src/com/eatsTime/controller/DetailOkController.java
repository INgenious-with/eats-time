package com.eatsTime.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.eatsTime.Action;
import com.eatsTime.Result;
import com.eatsTime.answerboard.dao.AnswerBoardDAO;
import com.eatsTime.answerboard.domain.AnswerBoardVO;
import com.eatsTime.inquiryboard.domain.InquiryBoardVO;

public class DetailOkController implements Action{
@Override
	public Result execute(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
	
	AnswerBoardDAO boardDAO = new AnswerBoardDAO();
	Result result = new Result();
	
	System.out.println("detailOk 들어옴");
	
	Long inqbId = Long.valueOf(req.getParameter("inqbId"));
	
	System.out.println(inqbId);
	
	
	req.setAttribute("boards", boardDAO.select(inqbId));
	
	
	result.setPath("templates/admin/adminQnaView.jsp");
	
	return result;
	
}
}
