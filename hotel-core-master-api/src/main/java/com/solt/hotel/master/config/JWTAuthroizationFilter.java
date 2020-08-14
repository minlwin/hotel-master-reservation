package com.solt.hotel.master.config;

import static com.solt.hotel.master.config.SecurityConstant.*;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

public class JWTAuthroizationFilter extends BasicAuthenticationFilter {
	
	public JWTAuthroizationFilter(AuthenticationManager authenticationManager) {
		super(authenticationManager);
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		String token = request.getHeader(HEADER);
		
		if(null == token) {
			chain.doFilter(request, response);
			return;
		}
			
		UsernamePasswordAuthenticationToken authentication = getAuthentication(token);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		chain.doFilter(request, response);
	}

	private UsernamePasswordAuthenticationToken getAuthentication(String token) {
		String username = JWT.require(Algorithm.HMAC512(SECRECT_KEY.getBytes()))
			.build()
			.verify(token)
			.getSubject();
		
		if(null != username)
			return new UsernamePasswordAuthenticationToken(username, null, new ArrayList<>());
		
		return null;
	}
}
