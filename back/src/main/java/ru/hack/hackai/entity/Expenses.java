package ru.hack.hackai.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "expenses_2", schema = "cbr")
@Data
@IdClass(CoordinateId.class)
public class Expenses {
    @Id
    private Long id;

    private String smeta;

    private Integer year;

    private String departament;

    private Double code;

    private String codeExpenses;

    private String nameExpenses;

    private String directionExpenses;

    private String sumBegin;

    private String sum;

    private String sumEndda;

    private String date;

    private String adress;

    private Double lat;

    private Double lng;

}
