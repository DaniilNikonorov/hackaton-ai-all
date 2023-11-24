package ru.hack.hackai.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "datalens", name = "key_rate")
@Data
public class KeyRate {
    @Id
    private String date;
    private Double rate;
}
