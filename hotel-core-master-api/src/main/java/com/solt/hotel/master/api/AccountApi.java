package com.solt.hotel.master.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	protected BaseService<Account, String> service() {
		return service;
	}

	@Override
	public ResponseEntity<Account> save(Account account) {
		account.setPassword(passwordEncoder.encode(account.getPassword()));
		return super.save(account);
	}
}
