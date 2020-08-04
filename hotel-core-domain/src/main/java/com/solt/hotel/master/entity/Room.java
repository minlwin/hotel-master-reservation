package com.solt.hotel.master.entity;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Room implements Serializable{

	private static final long serialVersionUID = 1L;

	public Room() {
	}

	@Id
	private String code;

	private String name;

	@ElementCollection
	private Map<String, String> others;

	@ElementCollection
	private List<String> photos;

}