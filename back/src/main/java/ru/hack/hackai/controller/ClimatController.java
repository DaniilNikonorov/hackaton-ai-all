package ru.hack.hackai.controller;

import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.hack.hackai.dto.ClimatDto;
import ru.hack.hackai.entity.TrSum;
import ru.hack.hackai.service.ClimatService;
import ru.hack.hackai.service.TrSumService;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/climat")
@Api(tags = "Справочник 'Климатические условия'")
@RequiredArgsConstructor
public class ClimatController {

    private final ClimatService service;

    @ApiOperation(value = "Все данные справочника 'Текущие расходы'")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Сервис не доступен")})

    @GetMapping("/get-all")
    public List<ClimatDto> getAllExpenses() {
        return service.getAll();
    }

    @ApiOperation(value = "Получить запись из справочника по climatId")
    @GetMapping("/get-by-climat-id/{climatId}")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "Сервис не доступен"),
    })
    public ResponseEntity<?> getAllExpensesByCoordinates(@PathVariable Long climatId) {
        try {
            return ResponseEntity.ok(service.getByClimatId(climatId));
        } catch (RuntimeException e) {
            log.error("Ошибка из-за ", e);
            return ResponseEntity.ok().build();
        }
    }
}
