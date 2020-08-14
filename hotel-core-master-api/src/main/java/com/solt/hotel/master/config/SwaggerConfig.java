package com.solt.hotel.master.config;

import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
	public Docket docket() {
		ApiInfo info = new ApiInfo("Hotel Core Master Api", null, "1.0", null, null, null, null, new ArrayList<>());
		
		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(info)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.solt.hotel.master.api"))
				.paths(PathSelectors.any())
				.build();
	}
}
