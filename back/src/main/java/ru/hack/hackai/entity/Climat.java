package ru.hack.hackai.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "climat_t", schema = "cbr")
@Data
public class Climat {
    @Id
    private Long id;

    private String city;

    private String regionCity;

    @Column(name = "coldest_days_98_f2")
    private Long coldestDays;

    @Column(name = "coldest_days_92_f3")
    private Long coldestDaysTwo;

    @Column(name = "coldest_five_98_f4")
    private Long coldestFive;

    @Column(name = "coldest_days_92_f5")
    private Long coldestFiveTwo;

    @Column(name = "temperature_94_f6")
    private Long temperature;

    @Column(name = "absolute_minimum_f7")
    private Long absoluteMinimun;

    @Column(name = "average_daily_temperature_coldest_month_f8")
    private Long averageDailyTemperatureColdestMont;

    @Column(name = "average_wind_speed_f20")
    private Long maxAverageWindSpeed;

    @Column(name = "precipitation_amount_november_mart_f17")
    private Long precipitationAmount;

    @Column(name = "wind_direction_december_february_f18")
    private String windDirection;

    @Column(name = "climatId")
    private Long climatId;

    @Column(name = "mean_monthly_relative_humidity_f15")
    private Long meanMonthlyHumidityColdestMonth;

}
