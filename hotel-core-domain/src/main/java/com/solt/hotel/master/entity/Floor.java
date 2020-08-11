package com.solt.hotel.master.entity;

import java.io.Serializable;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

	@JsonIgnore
	@ManyToOne
	private Building building;

}