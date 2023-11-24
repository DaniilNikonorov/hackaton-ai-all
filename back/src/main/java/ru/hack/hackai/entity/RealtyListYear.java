package ru.hack.hackai.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "realty_list_year", schema = "cbr")
@Data
public class RealtyListYear {
    @Id
    @Column(name = "id")
    private Long id;
    @Column(name = "year")
    private Integer year;
    @Column(name = "quarter")
    private Integer quarter;
    @Column(name = "department")
    private String department;
    @Column(name = "str_id")
    private Integer strId;
    @Column(name = "obj_info")
    private String objInfo;
    @Column(name = "name")
    private String name;
    @Column(name = "address")
    private String address;
    @Column(name = "reestr_code")
    private String reestrCode;
    @Column(name = "built_year_col3")
    private Integer builtYearCol3;
    @Column(name = "balance_accept_date_col4")
    private String balanceAcceptDateCol4;
    @Column(name = "total_area_col5")
    private Double totalAreaCol5;
    @Column(name = "total_area_building_col6")
    private Double totalAreaBuildingCol6;
    @Column(name = "bank_area_col7")
    private Double bankAreaCol7;
    @Column(name = "free_area_col8")
    private Double freeAreaCol8;
    @Column(name = "leased_out_by_bank_area_col9")
    private Double leasedOutByBankAreaCol9;
    @Column(name = "leased_by_bank_area_col10")
    private Double leasedByBankAreaCol10;
    @Column(name = "leased_by_bank_area_second_col11")
    private Double leasedByBankAreaSecondCol11;
    @Column(name = "transferred_by_bank_col12")
    private Double transferredByBankCol12;
    @Column(name = "transferred_by_bank_second_col13")
    private Double transferredByBankSecondCol13;
    @Column(name = "bank_area_second_col14")
    private Double bankAreaSecondCol14;
    @Column(name = "free_area_second_col15")
    private Double freeAreaSecondCol15;
    @Column(name = "leased_out_by_bank_area_col16")
    private Double leasedOutByBankAreaCol16;
    @Column(name = "leased_by_bank_area_third_col17")
    private Double leasedByBankAreaThirdCol17;
    @Column(name = "leased_by_bank_area_fourth_col18")
    private Double leasedByBankAreaFourthCol18;
    @Column(name = "transferred_by_bank_third_col19")
    private Double transferredByBankThirdCol19;
    @Column(name = "transferred_by_bank_fourth_col20")
    private Double transferredByBankFourthCol20;
    @Column(name = "carrying_amount_col21")
    private Double carryingAmountCol21;
    @Column(name = "revaluation_col22")
    private Double revaluationCol22;
    @Column(name = "accrued_amount_col23")
    private Double accruedAmountCol23;
    @Column(name = "residual_sum_col24")
    private Double residualSumCol24;
    @Column(name = "technical_condition_col25")
    private String technicalConditionCol25;
    @Column(name = "test", insertable = false, updatable = false)
    private Integer test;
    @Column(name = "object_id", insertable = false, updatable = false)
    private String objectId;
}
