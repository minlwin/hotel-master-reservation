package com.solt.hotel.master.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
@Entity
public class Account implements Serializable{

	private static final long serialVersionUID = 1L;

	public Account() {
	}

	@Id
	private String login;
	
	@NotEmpty(message = "Please enter password!")
	private String password;

	private Role role;

	public enum Role {
		Admin,
		Manager,
		Staff,
		Customer,
		Agent
	}

}