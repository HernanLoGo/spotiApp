package com.logo.connect.spotify.impl;

import java.util.Arrays;
import java.util.Base64;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.logo.connect.spotify.domain.TokenRS;
import com.logo.connect.spotify.service.impl.ConnectServiceImpl;

@Service
public class ConnectImpl implements ConnectServiceImpl {
	
	static Logger log = Logger.getLogger(ConnectImpl.class.getName());

	@Value("${spotify_client_id}")
	private String spotifyClientId;

	@Value("${spotify_client_secret}")
	private String spotifyClientSecret;

	@Autowired
	RestTemplate restTemplate;
	

	public TokenRS getToken() {

		String authorization = spotifyClientId + ":" + spotifyClientSecret;

		String base64Auth = Base64.getEncoder().withoutPadding().encodeToString(authorization.getBytes());

		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.add("Authorization", "Basic " + base64Auth);

		MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
		map.add("grant_type", "client_credentials");

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);

		ResponseEntity<TokenRS> response = restTemplate.postForEntity("https://accounts.spotify.com/api/token", request,
				TokenRS.class);

		return response.getBody();
	}
}
