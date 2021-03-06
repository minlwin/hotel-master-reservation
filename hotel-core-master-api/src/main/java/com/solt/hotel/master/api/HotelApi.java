package com.solt.hotel.master.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.Hotel;
import com.solt.hotel.master.service.HotelService;

@RestController
@RequestMapping("/hotel")
public class HotelApi extends BaseApi<Hotel, String>{

	@Autowired
	private HotelService service;
	
	@Override
	protected BaseService<Hotel, String> service() {
		return service;
	}

}
