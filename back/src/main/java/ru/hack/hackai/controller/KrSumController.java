package ru.hack.hackai.controller;

import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import ru.hack.hackai.dto.ExpensesDto;
import ru.hack.hackai.dto.ExpensesFullDto;
import ru.hack.hackai.entity.KrSum;
import ru.hack.hackai.service.ExpenseService;
import ru.hack.hackai.service.KrSumService;

import java.util.List;

@RestController
@RequestMapping("/kr-sum")
@Api(tags = "Справочник 'Расходы на капитальный ремонт'")
@RequiredArgsConstructor
public class KrSumController {
    private final KrSumService service;

    @ApiOperation(value = "Все данные справочника 'Расходы на капитальное ремонт'")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Сервис не доступен")})

    @GetMapping("/get-all")
    public List<KrSum> getAllExpenses() {
        return service.getAll();
    }

    @ApiOperation(value = "Получить данные из справочника по координатам")
    @GetMapping("/get-by-coordinates")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Сервис не доступен"),
    })
    public List<KrSum> getAllExpensesByCoordinates(@ApiParam("значение широты") @RequestParam(name = "lat") Double lat,
                                                   @ApiParam("значение долготы") @RequestParam(name = "lng") Double lng) {
        return service.getByCoordinates(lat, lng);
    }
}
