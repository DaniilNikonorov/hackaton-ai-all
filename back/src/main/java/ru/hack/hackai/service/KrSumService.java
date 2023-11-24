package ru.hack.hackai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.hack.hackai.dto.ExpensesDto;
import ru.hack.hackai.dto.ExpensesFullDto;
import ru.hack.hackai.entity.KrSum;
import ru.hack.hackai.repository.ExpensesDateRepository;
import ru.hack.hackai.repository.KrSumRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class KrSumService {
    private final KrSumRepository repository;

    public List<KrSum> getAll() {
        return repository.findAll();
    }

    public List<KrSum> getByCoordinates(Double lat, Double lng ) {
        return repository.findAllByLatAndLng(lat, lng);
    }
}
