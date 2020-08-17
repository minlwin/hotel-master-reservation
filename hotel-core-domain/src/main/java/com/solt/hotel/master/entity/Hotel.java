package com.solt.hotel.master.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
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
	private String code = UUID.randomUUID().toString();
	

	@NotEmpty(message = "Enter Hotel Name.")
	private String name;

	@NotEmpty(message = "Enter Hotel Location.")
	private String location;
	
	@Column(columnDefinition = "TEXT")
	private String description;
	
	@ElementCollection
	private List<String> photos;
	
	@OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	private List<Facility> facilities = new ArrayList<>();

	private int ranking;
	private String phone;
	private String email;

}