package com.solt.hotel.master.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
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



}
