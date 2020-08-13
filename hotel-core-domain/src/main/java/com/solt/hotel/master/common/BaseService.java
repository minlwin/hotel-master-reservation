package com.solt.hotel.master.common;

import java.util.List;

public interface BaseService<T, ID> {

	BaseRepository<T, ID> repo();
	
	default T save(T t) {
		return repo().save(t);
	}
	
	default List<T> findAll(){
		return repo().findAll();
	}

	default T findById(ID id) {
		return repo().getOne(id);
	}
}
