package com.eatsTime.inquiryboard.controller;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



import com.eatsTime.Action;
import com.eatsTime.Result;
import com.eatsTime.answerboard.dao.AnswerBoardDAO;
import com.eatsTime.answerboard.domain.AnswerBoardDTO;
import com.eatsTime.inquiryboard.dao.InquiryBoardDAO;
import com.eatsTime.inquiryboard.domain.Criteria;

public class ListOkController implements Action {

	@Override
	public Result execute(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
		resp.setContentType("text/html;charset=utf-8");
		System.out.println("ListOkController 들어옴");

		InquiryBoardDAO boardDAO=new InquiryBoardDAO();
		Result result=new Result();
		
		String temp = req.getParameter("page");
		int page = temp == null ? 1 : Integer.parseInt(temp);
		
//		JSONArray jsonArray=new JSONArray();
		
		HashMap<String, Object> pagable = new HashMap<String, Object>();
		Criteria criteria = new Criteria(page, boardDAO.getTotal());
		
		pagable.put("offset", criteria.getOffset());
		pagable.put("rowCount", criteria.getRowCount());

		
		req.setAttribute("boards", boardDAO.selectAll(pagable));
		req.setAttribute("realEndPage", criteria.getRealEndPage());
		req.setAttribute("total", boardDAO.getTotal());
		req.setAttribute("page", page);
		req.setAttribute("startPage", criteria.getStartPage());
		req.setAttribute("endPage", criteria.getEndPage());
		req.setAttribute("prev", criteria.isPrev());
		req.setAttribute("next", criteria.isNext());
		
		
		AnswerBoardDAO answerboardDAO=new AnswerBoardDAO();
		Long inqbId = Long.valueOf(req.getParameter("inqbId"));
		AnswerBoardDTO answerboardDTO = answerboardDAO.selectAnswer(inqbId);


		req.setAttribute("answers",answerboardDTO);

		System.out.println("답변등록");
		
//		req.setAttribute("ansbTitle", answerboardDTO.getAnsbTitle());
//		req.setAttribute("ansbContent", answerboardDTO.getAnsbContent());

		result.setPath("templates/board/qnaList.jsp");

		return result;
	}

}
