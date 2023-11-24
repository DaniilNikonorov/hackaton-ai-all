package ru.hack.hackai.dto;

import io.swagger.models.auth.In;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
public class CoordinateDto {
    private Double lng;
    private Double lat;

    private Double sum;

    private Double area;

    private String technicalCondition;

    private Integer count;

    private Set<RealtyDto> realtyDtoSet;
}
