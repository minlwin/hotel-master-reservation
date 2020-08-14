package com.solt.hotel.master.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Data
@Entity
public class Account implements Serializable{

	private static final long serialVersionUID = 1L;

	public Account() {
	}

	@Id
	private String login;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@NotEmpty(message = "Please enter password!")
	private String password;

	@Enumerated(EnumType.STRING)
	private Role role = Role.Admin;
	private boolean enable;

	public enum Role {
		Admin,
		Manager,
		Staff,
		Customer,
		Agent
	}

}