package com.solt.hotel.master.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@GetMapping(params = {"hotelCode"})
	public List<RoomType> findByHotelCode(@RequestParam("hotelCode") String code){
		return this.service.findByHotelCode(code);
	}

}
