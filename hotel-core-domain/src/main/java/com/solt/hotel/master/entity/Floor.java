package com.solt.hotel.master.entity;

import java.io.Serializable;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Data
@Entity
public class Floor implements Serializable{

	private static final long serialVersionUID = 1L;

	public Floor() {
	}

	@Id
	private String code = UUID.randomUUID().toString();

	private String name;

	@JsonProperty(access = Access.WRITE_ONLY)
	@ManyToOne
	private Building building;

}