package com.solt.hotel.master.repo;

import java.util.List;

import com.solt.hotel.master.common.BaseRepository;
import com.solt.hotel.master.entity.Building;

public interface BuildingRepo extends BaseRepository<Building, String>{
	List<Building> findByHotelCode(String code);
}
