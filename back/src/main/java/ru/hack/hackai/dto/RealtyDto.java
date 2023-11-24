package ru.hack.hackai.dto;

import lombok.Data;
import ru.hack.hackai.entity.RealtyListYear;
import ru.hack.hackai.entity.RealtyUniq;

import javax.persistence.Id;
import java.util.List;

@Data
public class RealtyDto {
    @Id
    private Long id;
    private String reestrCode;
    private String department;
    private String name;

    private String street;
    private String address;
    private String region;
    private String area;
    private String city;
    private String yaAddress;
    private Double lng;
    private Double lat;
    private RealtyLastYearDto lastYearDto;

    public RealtyDto(RealtyUniq from) {
        this.id = from.getId();
        this.reestrCode = from.getReestrCode();
        this.department = from.getDepartment();
        this.name = from.getName();
        this.street = from.getStreet();
        this.address = from.getAddress();
        this.region = from.getRegion();
        this.area = from.getArea();
        this.city = from.getCity();
        this.yaAddress = from.getYaAddress();
        this.lat = from.getLat();
        this.lng = from.getLng();
        this.lastYearDto = getActualLastYear(from);
    }

    private RealtyLastYearDto getActualLastYear(RealtyUniq from) {
        List<RealtyListYear> list = from.getRealtyListYears();
        list.sort(RealtyDto::compare);
        return list.stream().findFirst()
                .map(RealtyLastYearDto::new)
                .orElse(null);
    }

    private static int compare(RealtyListYear a, RealtyListYear b) {
        var aYear = a.getYear();
        var bYear = b.getYear();
        if (aYear == null) {
            return -1;
        }
        if (bYear == null) {
            return 1;
        }
        var resultByYear = aYear.compareTo(bYear);
        if (resultByYear != 0) {
            return resultByYear;
        }

        var aQuarter = a.getQuarter();
        var bQuarter = b.getQuarter();

        if (aQuarter == null) {
            return -1;
        }

        if (bQuarter == null) {
            return 1;
        }

        return a.getQuarter().compareTo(b.getQuarter());

    }
}
