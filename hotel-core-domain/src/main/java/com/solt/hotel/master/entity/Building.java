package com.solt.hotel.master.entity;

import java.io.Serializable;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Building implements Serializable{

	private static final long serialVersionUID = 1L;

	public Building() {
	}

	@Id
	private String code = UUID.randomUUID().toString();

	private String name;

	private String type;

	@ManyToOne
	private Hotel hotel;

}