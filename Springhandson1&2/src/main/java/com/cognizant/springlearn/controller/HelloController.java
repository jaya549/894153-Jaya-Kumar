package com.cognizant.springlearn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@ResponseBody
public class HelloController {
	@RequestMapping(value="/hello",method=RequestMethod.GET)
	public String sayHello()
	{
		return "Hello World!!";
	}
}
