package ru.hack.hackai.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.hack.hackai.entity.KeyRate;
import ru.hack.hackai.service.KeyService;

import java.util.List;

@RestController
@RequestMapping("/keys")
@Api(tags = "About KeyRate")
@RequiredArgsConstructor
public class KeyRateController {
    private final KeyService keyService;


    @ApiOperation(value = "Data from key-rate table")
    @ApiResponses(value = {
            @ApiResponse(code = 500, message = "ServiceUnavailable")})

    @GetMapping("/get-all")
    public List<KeyRate> getAllKeys() {
        return keyService.getAll();
    }



}
