package com.solt.hotel.master.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solt.hotel.master.common.BaseRepository;
import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.Room;
import com.solt.hotel.master.repo.RoomRepo;

@Service
public class RoomService implements BaseService<Room, String> {
	
	@Autowired
	private RoomRepo repo;
	
	@Override
	public BaseRepository<Room, String> repo() {
		return repo;
	}

}
