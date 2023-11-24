package ru.hack.hackai.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import ru.hack.hackai.dto.CoordinateDto;
import ru.hack.hackai.dto.RealtyDto;
import ru.hack.hackai.service.RealtyService;

import java.util.List;

@RestController
@RequestMapping("/realty")
@Api(tags = "About RealtyTable")
@RequiredArgsConstructor
public class RealtyController {
    private final RealtyService service;

    @ApiOperation(value = "Здания, сагрегированные по области")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "ServiceUnavailable")})

    @GetMapping("/get-all")
    public List<CoordinateDto> getAllExpenses() {
        return service.getAll();
    }

    @ApiOperation(value = "Любое здание по его идентификатору")
    @GetMapping("/get-by-id/{id}")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "ServiceUnavailable"),
            @ApiResponse(code = 404, message = "Expense was not found"),
    })
    public ResponseEntity<RealtyDto> getAllExpenses(@PathVariable Long id) {
        return service.getById(id)
                .map(exp -> ResponseEntity.ok(new RealtyDto(exp)))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "expense doesn't found"));
    }
}
