package com.solt.hotel.master.common;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface BaseRepository<T, ID> extends JpaRepository<T, ID>{

	List<T> search(String jpql, Map<String, Object> params);
	T searchOne(String jpql, Map<String, Object> params);
	Long searchCount(String jpql, Map<String, Object> params);
	<D>List<D> search(String jpql, Map<String, Object> params, Class<D> type);
	<D>D searchOne(String jpql, Map<String, Object> params, Class<D> type);
	
}
