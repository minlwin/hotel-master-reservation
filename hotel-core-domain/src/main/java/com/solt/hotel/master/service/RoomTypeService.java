package com.solt.hotel.master.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solt.hotel.master.common.BaseRepository;
import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.RoomType;
import com.solt.hotel.master.repo.RoomTypeRepo;

@Service
public class RoomTypeService implements BaseService<RoomType, String> {

	@Autowired
	private RoomTypeRepo repo;
	
	@Override
	public BaseRepository<RoomType, String> repo() {
		return repo;
	}
}
