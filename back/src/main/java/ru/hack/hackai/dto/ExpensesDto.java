package ru.hack.hackai.dto;

import lombok.Data;
import ru.hack.hackai.entity.ExpensesDate;

@Data
public class ExpensesDto {
    private Long id;
    private String adress;

    public ExpensesDto(ExpensesDate from) {
        this.id = from.getId();
        this.adress = from.getAdress();
    }
}
