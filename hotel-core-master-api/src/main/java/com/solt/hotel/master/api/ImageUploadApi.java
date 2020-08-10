package com.solt.hotel.master.api;

import java.io.IOException;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/image-upload")
public class ImageUploadApi {
	
	@Value("${image.base.path}")
	private String basePath;
	@Value("${image.base.url}")
	private String baseUrl;
	
	@PostMapping
	public ResponseEntity<Image> upload(@RequestParam MultipartFile file) throws IllegalStateException, IOException{
		String newFileName = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-ddHH-mm-ss"))
				.concat(file.getOriginalFilename());
		file.transferTo(Paths.get(basePath).resolve(newFileName));
		 return ResponseEntity.accepted().body(new Image(baseUrl.concat(newFileName)));
	}
	
	private class Image{
		String path;
		
		Image(String path){
			this.path = path;
		}
		
		@SuppressWarnings("unused")
		public String getPath() {
			return path;
		}
	}
}