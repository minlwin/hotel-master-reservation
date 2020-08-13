package com.solt.hotel.master.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.Building;
import com.solt.hotel.master.service.BuildingService;

@RestController
@RequestMapping("/building")
public class BuildingApi extends BaseApi<Building, String> {

	@Autowired
	private BuildingService service;
	
	@Override
	protected BaseService<Building, String> service() {
		return service;
	}

	@GetMapping(params = {"hotelCode"})
	public List<Building> findByHotel(@RequestParam("hotelCode") String code){
		return service.findByHotelCode(code);
	}

}
