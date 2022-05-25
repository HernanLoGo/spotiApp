package com.logo.connect.spotify.domain;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TokenRS implements Serializable {

	private static final long serialVersionUID = 5756934065593982702L;

	@JsonProperty("access_token")
	private String accessToken;

	@JsonProperty("token_type")
	private String tokenType;

	@JsonProperty("expires_in")
	private String expiresIn;

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

	public String getTokenType() {
		return tokenType;
	}

	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}

	public String getExpiresIn() {
		return expiresIn;
	}

	public void setExpiresIn(String expiresIn) {
		this.expiresIn = expiresIn;
	}

	@Override
	public String toString() {
		return "TokenRS [accessToken=" + accessToken + ", tokenType=" + tokenType + ", expiresIn=" + expiresIn + "]";
	}

}
