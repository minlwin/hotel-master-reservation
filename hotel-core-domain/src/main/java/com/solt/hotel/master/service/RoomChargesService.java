package com.solt.hotel.master.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solt.hotel.master.common.BaseRepository;
import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.RoomCharges;
import com.solt.hotel.master.repo.RoomChargesRepo;

@Service
public class RoomChargesService implements BaseService<RoomCharges, Integer> {

	@Autowired
	private RoomChargesRepo repo;
	
	@Override
	public BaseRepository<RoomCharges, Integer> repo() {
		return repo;
	}
}
