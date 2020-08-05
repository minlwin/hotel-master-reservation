package com.solt.hotel.master.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solt.hotel.master.common.BaseRepository;
import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.Building;
import com.solt.hotel.master.repo.BuildingRepo;

@Service
public class BuildingService implements BaseService<Building, String> {

	@Autowired
	private BuildingRepo repo;

	@Override
	public BaseRepository<Building, String> repo() {
		return repo;
	}
	
	
}
