package com.solt.hotel.master.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Data
@Entity
public class Building implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	private String code = UUID.randomUUID().toString();

	private String name;

	private String type;

	@ManyToOne
	private Hotel hotel;
	
	@OneToMany(mappedBy = "building", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	private List<Floor> floors = new ArrayList<>();
	
	public void setFloors(List<Floor> floors) {
		this.floors = floors;
		this.floors.forEach(floor -> floor.setBuilding(this));
	}
}