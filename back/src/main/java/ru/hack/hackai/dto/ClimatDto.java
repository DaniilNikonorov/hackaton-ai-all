package ru.hack.hackai.dto;

import lombok.Data;
import ru.hack.hackai.entity.Climat;

@Data
public class ClimatDto {
    private Long meanMonthlyHumidityColdestMonth;
    private Long averageDailyTemperatureColdestMonth;
    private Long absoluteMinimumTemperature;
    private Long maxAverageWindSpeed;
    private Long precipitationAmount;
    private String windDirection;
    private Long climatId;

    public ClimatDto(Climat from) {
        this.meanMonthlyHumidityColdestMonth = from.getMeanMonthlyHumidityColdestMonth();
        this.averageDailyTemperatureColdestMonth = from.getAverageDailyTemperatureColdestMont();
        this.absoluteMinimumTemperature = from.getAbsoluteMinimun();
        this.maxAverageWindSpeed = from.getMaxAverageWindSpeed();
        this.precipitationAmount = from.getPrecipitationAmount();
        this.windDirection = from.getWindDirection();
        this.climatId = from.getClimatId();


    }
}
