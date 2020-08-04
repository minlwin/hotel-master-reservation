package com.solt.hotel.master.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
@Entity
public class Hotel implements Serializable{

	private static final long serialVersionUID = 1L;

	public Hotel() {
	}
	
	@Id
	private String code;

	@NotEmpty(message = "Enter Hotel Name.")
	private String name;

	@NotEmpty(message = "Enter Hotel Location.")
	private String location;

	private String ranking;

	@OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	private List<Facility> facilities = new ArrayList<>();
	

}