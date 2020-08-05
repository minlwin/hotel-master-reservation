package com.solt.hotel.master.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.Account;
import com.solt.hotel.master.service.AccountService;

@RestController
@RequestMapping("/account")
public class AccountApi extends BaseApi<Account, String> {
	
	@Autowired
	private AccountService service;

	@Override
	protected BaseService<Account, String> service() {
		return service;
	}

}
