package ru.hack.hackai.controller;

import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import ru.hack.hackai.dto.ExpensesDto;
import ru.hack.hackai.dto.ExpensesFullDto;
import ru.hack.hackai.service.ExpenseService;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/expenses")
@Api(tags = "Справочник 'Коммунальные расходы'")
@RequiredArgsConstructor
public class ExpenseController {
    private final ExpenseService service;

    @ApiOperation(value = "Получить весь 'Коммунальные расходы'")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Сервис не доступен")})

    @GetMapping("/get-all")
    public List<ExpensesDto> getAllExpenses() {
        return service.getAll();
    }

    @ApiOperation(value = "Одна запись из справочник по id")
    @GetMapping("/get-by-id/{id}")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Сервис не доступен"),
            @ApiResponse(code = 404, message = "Коммунальный расход не найден"),
    })
    public ResponseEntity<ExpensesFullDto> getAllExpenses(@PathVariable Long id) {
        return service.getById(id)
                .map(exp -> ResponseEntity.ok(new ExpensesFullDto(exp)))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "expense doesn't found"));
    }

    @ApiOperation(value = "Получить данные из справочника по координатам")
    @GetMapping("/get-by-coordinates")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Сервис не доступен"),
    })
    public Set<ExpensesFullDto> getAllExpensesByCoordinates(@ApiParam("значение широты") @RequestParam(name = "lat") Double lat,
                                                            @ApiParam("значение долготы") @RequestParam(name = "lng") Double lng) {
        return service.getByCoordinates(lat, lng);
    }
}
