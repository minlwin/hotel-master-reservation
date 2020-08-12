package com.solt.hotel.master.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Data
@Entity
public class RoomCharges implements Serializable{

	private static final long serialVersionUID = 1L;

	public RoomCharges() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private int charges;

	private String currency;

	@JsonProperty(access = Access.WRITE_ONLY)
	@ManyToOne
	private RoomType roomType;

	private Nationality nationality;

	private Type type;

	public enum Nationality {
		Foreign,
		Local
	}

	public enum Type {
		Normal,
		Extra,
		Child
	}

}