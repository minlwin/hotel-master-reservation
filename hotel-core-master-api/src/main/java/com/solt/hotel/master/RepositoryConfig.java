package com.solt.hotel.master;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.solt.hotel.master.common.BaseRepositoryImpl;

@Configuration
@EnableJpaRepositories(basePackages = {"com.solt.hotel.master.repo"}, repositoryBaseClass = BaseRepositoryImpl.class)
public class RepositoryConfig {

}
