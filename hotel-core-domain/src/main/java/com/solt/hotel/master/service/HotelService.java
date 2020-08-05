package com.solt.hotel.master.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solt.hotel.master.common.BaseRepository;
import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.Hotel;
import com.solt.hotel.master.repo.HotelRepo;

@Service
public class HotelService implements BaseService<Hotel, String> {

	@Autowired
	private HotelRepo repo;
	
	@Override
	public BaseRepository<Hotel, String> repo() {
		return repo;
	}

}
