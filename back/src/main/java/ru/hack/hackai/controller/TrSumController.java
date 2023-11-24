package ru.hack.hackai.controller;

import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.hack.hackai.entity.KrSum;
import ru.hack.hackai.entity.TrSum;
import ru.hack.hackai.service.KrSumService;
import ru.hack.hackai.service.TrSumService;

import java.util.List;

@RestController
@RequestMapping("/tr-sum")
@Api(tags = "Справочник 'Текущие расходы'")
@RequiredArgsConstructor
public class TrSumController {

    private final TrSumService service;

    @ApiOperation(value = "Все данные справочника 'Текущие расходы'")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Сервис не доступен")})

    @GetMapping("/get-all")
    public List<TrSum> getAllExpenses() {
        return service.getAll();
    }

    @ApiOperation(value = "Получить данные из справочника по координатам")
    @GetMapping("/get-by-coordinates")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Сервис не доступен"),
    })
    public List<TrSum> getAllExpensesByCoordinates(@ApiParam("значение широты") @RequestParam(name = "lat") Double lat,
                                                   @ApiParam("значение долготы") @RequestParam(name = "lng") Double lng) {
        return service.getByCoordinates(lat, lng);
    }
}
