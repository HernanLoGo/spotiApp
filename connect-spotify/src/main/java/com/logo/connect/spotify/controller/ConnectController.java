package com.logo.connect.spotify.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.logo.connect.spotify.domain.TokenRS;
import com.logo.connect.spotify.service.impl.ConnectServiceImpl;

@Controller
@RequestMapping(value = "/spoti-app")
public class ConnectController {

	@Autowired
	private ConnectServiceImpl connectService;

	@GetMapping(value = "/get-token")
	public ResponseEntity<TokenRS> getToken() {
		ResponseEntity<TokenRS> response;
		TokenRS tokenRs = connectService.getToken();
		response = new ResponseEntity<>(tokenRs, HttpStatus.OK);
		return response;
	}

}
