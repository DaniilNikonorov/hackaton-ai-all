package ru.hack.hackai.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "expenses_date", schema = "cbr")
@Data
public class ExpensesDate {
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

}
