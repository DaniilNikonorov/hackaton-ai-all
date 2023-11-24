package ru.hack.hackai.dto;

import lombok.Data;
import ru.hack.hackai.entity.Expenses;

import javax.persistence.Id;

@Data
public class ExpensesFullDto {
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

    private String address;

    private Double lng;

    private Double lat;

    public ExpensesFullDto(Expenses from) {
        this.id = from.getId();
        this.smeta = from.getSmeta();
        this.year = from.getYear();
        this.departament = from.getDepartament();
        this.code = from.getCode();
        this.codeExpenses = from.getCodeExpenses();
        this.nameExpenses = from.getNameExpenses();
        this.directionExpenses = from.getDirectionExpenses();
        this.sumBegin = from.getSumBegin();
        this.sum = from.getSum();
        this.sumEndda = from.getSumEndda();
        this.date = from.getDate();
        this.address = from.getAdress();
        this.lng = from.getLng();
        this.lat = from.getLat();
    }

}
