package ru.hack.hackai.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ks_sum", schema = "cbr")
@Data
public class KsSum {
    @Id
    private Long id;

    private Double lng;

    private Double lat;

    private String begda;

    private String name;

    private Double sum;

    private String endda;

    private String departament;

    private String adress;

    private String objectId;
}
