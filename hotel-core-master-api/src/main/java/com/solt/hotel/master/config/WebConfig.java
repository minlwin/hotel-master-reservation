package com.solt.hotel.master.config;

import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowCredentials(true).allowedMethods("*").allowedHeaders("*").allowedOrigins("*");
	}

	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
		Optional<HttpMessageConverter<?>> messageConverter = converters.stream()
				.filter(c -> c instanceof AbstractJackson2HttpMessageConverter).findFirst();

		if (messageConverter.isPresent()) {
			AbstractJackson2HttpMessageConverter converter = (AbstractJackson2HttpMessageConverter) messageConverter
					.get();
			converter.getObjectMapper().addMixIn(Object.class, HibernateProperties.class);
		}
	}

	@JsonIgnoreProperties({ "hibernateLazyInitializer" })
	private class HibernateProperties {
	}
}
