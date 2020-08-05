package com.solt.hotel.master.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.Floor;
import com.solt.hotel.master.service.FloorService;

@RestController
@RequestMapping("/floor")
public class FloorApi extends BaseApi<Floor, String> {

	@Autowired
	private FloorService service;
	
	@Override
	protected BaseService<Floor, String> service() {
		return service;
	}

}
