package com.solt.hotel.master.entity;

import java.io.Serializable;
import java.util.*;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Facility implements Serializable {

	private static final long serialVersionUID = 1L;

	public Facility() {
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(nullable = false)
	private String title;

	@ElementCollection
	private List<String> facilities;

}