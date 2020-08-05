package com.solt.hotel.master.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.RoomType;
import com.solt.hotel.master.service.RoomTypeService;

@RestController
@RequestMapping("/room-type")
public class RoomTypeApi extends BaseApi<RoomType, String> {
	
	@Autowired
	private RoomTypeService service;

	@Override
	protected BaseService<RoomType, String> service() {
		return service;
	}

}
