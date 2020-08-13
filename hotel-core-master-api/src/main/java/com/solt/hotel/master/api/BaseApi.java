package com.solt.hotel.master.api;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.solt.hotel.master.common.BaseService;

public abstract class BaseApi<T, ID> {

	protected abstract BaseService<T, ID> service();
	
	@PostMapping
	public ResponseEntity<T> save(@RequestBody T t){
		return ResponseEntity.accepted().body(service().save(t));
	}

	@GetMapping
	public List<T> findAll(){
		return service().findAll();
	}
	
	@GetMapping("{id}")
	public T findById(@PathVariable ID id) {
		return service().findById(id);
	}
}
