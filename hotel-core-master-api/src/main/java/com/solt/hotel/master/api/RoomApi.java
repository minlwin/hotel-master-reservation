package com.solt.hotel.master.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.Room;
import com.solt.hotel.master.service.RoomService;

@RestController
@RequestMapping("/room")
public class RoomApi extends BaseApi<Room, String> {

	@Autowired
	private RoomService service;
	
	@Override
	protected BaseService<Room, String> service() {
		return service;
	}

}
