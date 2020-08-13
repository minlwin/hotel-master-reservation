package com.solt.hotel.master.repo;

import java.util.List;

import com.solt.hotel.master.common.BaseRepository;
import com.solt.hotel.master.entity.RoomType;

public interface RoomTypeRepo extends BaseRepository<RoomType, String>{

	List<RoomType> findByHotelCode(String code);

}
