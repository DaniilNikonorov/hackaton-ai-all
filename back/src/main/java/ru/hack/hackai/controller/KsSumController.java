package ru.hack.hackai.controller;

import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.hack.hackai.entity.KsSum;
import ru.hack.hackai.service.KsSumService;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/ks-sum")
@Api(tags = "Справочник 'Расходы на капитальное строительство'")
@RequiredArgsConstructor
public class KsSumController {
    private final KsSumService service;

    @ApiOperation(value = "Все записи справочника 'Расходы на капитальное строительство'")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "ServiceUnavailable")})

    @GetMapping("/get-all")
    public List<KsSum> getAllExpenses() {
        return service.getAll();
    }

    @ApiOperation(value = "Получить данные из справочника по координатам")
    @GetMapping("/get-by-coordinates")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "ServiceUnavailable"),
    })
    public Set<KsSum> getAllExpensesByCoordinates(@ApiParam("значение широты") @RequestParam(name = "lat") Double lat,
                                                  @ApiParam("значение долготы") @RequestParam(name = "lng") Double lng) {
        return new HashSet<>(service.getByCoordinates(lat, lng));
    }
}
