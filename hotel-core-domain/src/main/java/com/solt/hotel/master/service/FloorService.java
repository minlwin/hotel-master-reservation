package com.solt.hotel.master.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solt.hotel.master.common.BaseRepository;
import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.Floor;
import com.solt.hotel.master.repo.FloorRepo;

@Service
public class FloorService implements BaseService<Floor, String> {
	
	@Autowired
	private FloorRepo repo;

	@Override
	public BaseRepository<Floor, String> repo() {
		return repo;
	}

}
