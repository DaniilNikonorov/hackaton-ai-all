package ru.hack.hackai.dto;

import lombok.Data;
import ru.hack.hackai.entity.RealtyListYear;

import javax.persistence.Id;

@Data
public class RealtyLastYearDto {

    public RealtyLastYearDto(RealtyListYear from) {
        this.id = from.getId();
        this.year = from.getYear();
        this.quarter = from.getQuarter();
        this.department = from.getDepartment();
        this.strId = from.getStrId();
        this.objInfo = from.getObjInfo();
        this.name = from.getName();
        this.address = from.getAddress();
        this.reestrCode = from.getReestrCode();
        this.builtYearCol3 = from.getBuiltYearCol3();
        this.balanceAcceptDateCol4 = from.getBalanceAcceptDateCol4();
        this.totalAreaCol5 = from.getTotalAreaCol5();
        this.totalAreaBuildingCol6 = from.getTotalAreaBuildingCol6();
        this.bankAreaCol7 = from.getBankAreaCol7();
        this.freeAreaCol8 = from.getFreeAreaCol8();
        this.leasedOutByBankAreaCol9 = from.getLeasedOutByBankAreaCol9();
        this.leasedByBankAreaCol10 = from.getLeasedByBankAreaCol10();
        this.leasedByBankAreaSecondCol11 = from.getLeasedByBankAreaSecondCol11();
        this.transferredByBankCol12 = from.getTransferredByBankCol12();
        this.transferredByBankSecondCol13 = from.getTransferredByBankSecondCol13();
        this.bankAreaSecondCol14 = from.getBankAreaSecondCol14();
        this.freeAreaSecondCol15 = from.getFreeAreaSecondCol15();
        this.leasedOutByBankAreaCol16 = from.getLeasedOutByBankAreaCol16();
        this.leasedByBankAreaThirdCol17 = from.getLeasedByBankAreaThirdCol17();
        this.leasedByBankAreaFourthCol18 = from.getLeasedByBankAreaFourthCol18();
        this.transferredByBankThirdCol19 = from.getTransferredByBankThirdCol19();
        this.transferredByBankFourthCol20 = from.getTransferredByBankFourthCol20();
        this.carryingAmountCol21 = from.getCarryingAmountCol21();
        this.revaluationCol22 = from.getRevaluationCol22();
        this.accruedAmountCol23 = from.getAccruedAmountCol23();
        this.residualSumCol24 = from.getResidualSumCol24();
        this.technicalConditionCol25 = from.getTechnicalConditionCol25();
        this.test = from.getTest();
        this.objectId = from.getObjectId();
    }

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
