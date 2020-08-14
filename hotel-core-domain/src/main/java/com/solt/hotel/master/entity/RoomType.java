package com.solt.hotel.master.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class RoomType implements Serializable{

	private static final long serialVersionUID = 1L;

	public RoomType() {
	}
	
	@Id
	private String code = UUID.randomUUID().toString();

	private String name;

	private String bedType;

	private int beds;

	@ManyToOne
	private Hotel hotel;
	
	@ElementCollection
	private List<String> photos;

	@OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
	private List<Facility> facilities = new ArrayList<>();

	@OneToMany(mappedBy = "roomType", cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
	private List<RoomCharges> charges = new ArrayList<>();
	
	public void setCharges(List<RoomCharges> charges) {
		this.charges = charges;
		this.charges.forEach(charge -> charge.setRoomType(this));
	}

}