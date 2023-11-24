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
import ru.hack.hackai.dto.ExpensesDto;
import ru.hack.hackai.dto.ExpensesFullDto;
import ru.hack.hackai.service.ExpenseService;

import java.util.List;

@RestController
@RequestMapping("/expenses")
@Api(tags = "About Expenses")
@RequiredArgsConstructor
public class ExpenseController {
    private final ExpenseService service;

    @ApiOperation(value = "Data from expenses-date table")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "ServiceUnavailable")})

    @GetMapping("/get-all")
    public List<ExpensesDto> getAllExpenses() {
        return service.getAll();
    }

    @ApiOperation(value = "One full row from expenses-date table")
    @GetMapping("/get-by-id/{id}")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "ServiceUnavailable"),
            @ApiResponse(code = 404, message = "Expense was not found"),
    })
    public ResponseEntity<ExpensesFullDto> getAllExpenses(@PathVariable Long id) {
        return service.getById(id)
                .map(exp -> ResponseEntity.ok(new ExpensesFullDto(exp)))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "expense doesn't found"));
    }
}
