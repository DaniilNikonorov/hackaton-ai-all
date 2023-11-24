package ru.hack.hackai.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "realty_list_year", schema = "cbr")
@Data
public class RealtyListYear {
    @Id
    private Long id;
    private Long year;
    private Long quarter;
    private String department;
    private Integer strId;
    private String objInfo;
    private String name;
    private String address;
    private String reestrCode;
    private Integer builtYearCol3;
    private String balanceAcceptDateCol4;
    private Double totalAreaCol5;
    private Double totalAreaBuildingCol6;
    private Double bankAreaCol7;
    private Double freeAreaCol8;
    private Double leasedOutByBankAreaCol9;
    private Double leasedByBankAreaCol10;
    private Double leasedByBankAreaSecondCol11;
    private Double transferredByBankCol12;
    private Double transferredByBankSecondCol13;
    private Double bankAreaSecondCol14;
    private Double freeAreaSecondCol15;
    private Double leasedOutByBankAreaCol16;
    private Double leasedByBankAreaThirdCol17;
    private Double leasedByBankAreaFourthCol18;
    private Double transferredByBankThirdCol19;
    private Double transferredByBankFourthCol20;
    private Double carryingAmountCol21;
    private Double revaluationCol22;
    private Double accruedAmountCol23;
    private Double residualSumCol24;
    private String technicalConditionCol25;
    private Integer test;
    private String objectId;
}
