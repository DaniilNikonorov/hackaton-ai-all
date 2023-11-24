package ru.hack.hackai.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "realty_uniq", schema = "cbr")
@Data
public class RealtyUniq {
    @Id
    private Long id;
    private String reestrCode;
    private String department;
    private String name;

    private String street;
    private String address;
    private String region;
    private String area;
    private String city;
    private String yaAddress;
    private Double lng;
    private Double lat;

    @OneToMany
    @JoinColumn(name = "object_id", referencedColumnName = "object_id")
    private List<RealtyListYear> realtyListYears = new ArrayList<>();
}
