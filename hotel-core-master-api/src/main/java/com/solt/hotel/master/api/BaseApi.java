package com.solt.hotel.master.api;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.solt.hotel.master.common.BaseService;

public abstract class BaseApi<T, ID> {

	protected abstract BaseService<T, ID> service();
	
	@GetMapping
	public List<T> findAll(){
		return service().findAll();
	}
	
	@PostMapping
	public ResponseEntity<T> save(@RequestBody T t){
		return ResponseEntity.accepted().body(service().save(t));
	}
}
