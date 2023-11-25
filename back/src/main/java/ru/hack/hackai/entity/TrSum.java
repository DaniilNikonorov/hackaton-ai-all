package ru.hack.hackai.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tr_sum", schema = "cbr")
@Data
public class TrSum {
    @Id
    private String objectId;

    private Double lng;

    private Double lat;

    private String name;

    private Double sum;
    private Integer codeBuh;
    private Integer codeTu;

}
