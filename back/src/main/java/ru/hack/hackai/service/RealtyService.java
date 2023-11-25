package ru.hack.hackai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.hack.hackai.dto.CoordinateDto;
import ru.hack.hackai.dto.RealtyDto;
import ru.hack.hackai.entity.RealtyListYear;
import ru.hack.hackai.entity.RealtyUniq;
import ru.hack.hackai.repository.RealtyListRepository;
import ru.hack.hackai.repository.RealtyUniqRepository;

import javax.annotation.PostConstruct;
import java.util.*;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.groupingBy;
import static java.util.stream.Collectors.toList;

@Service
@RequiredArgsConstructor
public class RealtyService {
    private final RealtyUniqRepository repository;
    private final RealtyListRepository realtyListRepository;
    private List<RealtyUniq> realtyUniqList = new ArrayList<>();

    @PostConstruct
    public void initCollections() {
        this.realtyUniqList = repository.findAll();
        var realtiesYearMap = realtyListRepository.findAll().stream()
                .filter(o -> o.getObjectId() != null)
                .collect(groupingBy(
                        RealtyListYear::getObjectId,
                        toList())
                );
        realtyUniqList.forEach(r -> {
            var result = realtiesYearMap.get(r.getObjectId());
            r.setRealtyListYears(result != null ? result : new ArrayList<>());
        });
    }

    public List<CoordinateDto> getAll() {

        HashMap<String, CoordinateDto> coordinates = new HashMap<>();
        realtyUniqList.stream()
                .map(RealtyDto::new)
                .filter(r -> r.getLastYearDto() != null)
                .forEach(realtyDto -> {
                    var lastYear = realtyDto.getLastYearDto();
                    var key = realtyDto.getLat() + "_" + realtyDto.getLng();
                    var area = lastYear.getTotalAreaCol5() != null
                            ? lastYear.getTotalAreaCol5()
                            : 0;
                    var sum = lastYear.getCarryingAmountCol21() != null
                            ? lastYear.getCarryingAmountCol21()
                            : 0;
                    if (coordinates.containsKey(key)) {
                        var coordinate = coordinates.get(key);
                        coordinate.setArea(coordinate.getArea() + area);
                        coordinate.setSum(coordinate.getSum() + sum);
                        coordinate.getRealtyDtoSet().add(realtyDto);
                    } else {
                        var dtoSet = new HashSet<RealtyDto>();
                        coordinates.put(key,
                                CoordinateDto.builder()
                                        .lat(realtyDto.getLat())
                                        .lng(realtyDto.getLng())
                                        .area(area)
                                        .sum(sum)
                                        .realtyDtoSet(dtoSet)
                                        .build());
                    }
                    coordinates.get(key)
                            .setCount(coordinates.get(key).getRealtyDtoSet().size());
                });
        coordinates.values().forEach(c -> {
            c.setCount(c.getRealtyDtoSet().size());
            String sValue = String.format("%.2f", c.getSum());
            Double newValue = Double.parseDouble(sValue.replace(',', '.'));
            c.setSum(newValue);

            String areaStr = String.format("%.2f", c.getArea());
            Double area = Double.parseDouble(areaStr.replace(',', '.'));
            c.setArea(area);

            c.getRealtyDtoSet().stream()
                    .filter(e -> e.getLastYearDto().getTechnicalConditionCol25() != null)
                    .max((a, b) -> {
                        var aTechnicalCondition = a.getLastYearDto().getTotalAreaCol5();
                        var bTechnicalCondition = b.getLastYearDto().getTotalAreaCol5();
                        if (aTechnicalCondition == null) {
                            return -1;
                        }
                        if (bTechnicalCondition == null) {
                            return 1;
                        }
                        return aTechnicalCondition.compareTo(bTechnicalCondition);
                    })
                    .ifPresent(e -> {
                                c.setClimatId(e.getClimatId());
                                c.setTechnicalCondition(e.getLastYearDto().getTechnicalConditionCol25());
                            }
                    );


        });
        return coordinates.values().stream()
                .filter(c -> !c.getRealtyDtoSet().isEmpty())
                .sorted(Comparator
                        .comparing(CoordinateDto::getArea)
                        .reversed()
                )
                .toList();

    }

    public Optional<RealtyUniq> getById(Long id) {
        return repository.findById(id);
    }

    public List<RealtyListYear> findAllListYear() {
        return realtyListRepository.findAll();
    }


    private int comparator(RealtyDto a, RealtyDto b) {
        var firstArea = a.getLastYearDto();
        var secondArea = b.getLastYearDto();
        if (firstArea == null) {
            return -1;
        }
        if (secondArea == null) {
            return 1;
        }
        var firstAreaSize = a.getLastYearDto().getTotalAreaCol5();
        var secondAreaSize = b.getLastYearDto().getTotalAreaCol5();
        if (firstAreaSize == null) {
            return -1;
        }
        if (secondAreaSize == null) {
            return 1;
        }
        return firstAreaSize.compareTo(secondAreaSize);

    }
}
