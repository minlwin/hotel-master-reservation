package com.solt.hotel.master.entity;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Room implements Serializable{

	private static final long serialVersionUID = 1L;

	public Room() {
	}

	@Id
	private String code = UUID.randomUUID().toString();

	private String name;

	@ElementCollection
	private Map<String, String> others;

	@ElementCollection
	private List<String> photos;
	
	@ManyToOne
	private Floor floor;
	
	@OneToOne
	private RoomType roomType;

}