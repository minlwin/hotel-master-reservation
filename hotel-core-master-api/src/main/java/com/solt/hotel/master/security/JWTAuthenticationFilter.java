package com.solt.hotel.master.security;

import static com.solt.hotel.master.security.SecurityConstant.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.solt.hotel.master.entity.Account;


public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	
	private AuthenticationManager authenticationManager;
	
	public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		
		try {
			Account account = new ObjectMapper().readValue(request.getInputStream(), Account.class);
			return authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(account.getLogin(), account.getPassword(), new ArrayList<>()));
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication auth) throws IOException, ServletException {
		
		User user = (User) auth.getPrincipal();
		
		String token = JWT.create()
		.withSubject(user.getUsername())
		.withExpiresAt(new Date(System.currentTimeMillis() + ExPIRATION_TIME))
		.sign(Algorithm.HMAC512(SECRECT_KEY.getBytes()));
		
		response.setHeader("Access-Control-Expose-Headers", "Authorization, role");
		response.setHeader("role", user.getAuthorities().stream().findFirst().get().getAuthority());
		response.setHeader(HEADER, token);
	}
}
