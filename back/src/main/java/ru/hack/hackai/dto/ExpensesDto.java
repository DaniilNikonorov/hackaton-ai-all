package ru.hack.hackai.dto;

import lombok.Data;
import ru.hack.hackai.entity.Expenses;

@Data
public class ExpensesDto {
    private Long id;
    private String adress;

    public ExpensesDto(Expenses from) {
        this.id = from.getId();
        this.adress = from.getAdress();
    }
}
