package com.solt.hotel.master.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solt.hotel.master.common.BaseRepository;
import com.solt.hotel.master.common.BaseService;
import com.solt.hotel.master.entity.Account;
import com.solt.hotel.master.repo.AccountRepo;

@Service
public class AccountService implements BaseService<Account, String> {
	
	@Autowired
	private AccountRepo repo;

	@Override
	public BaseRepository<Account, String> repo() {
		return repo;
	}

}
