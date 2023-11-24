package ru.hack.hackai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.hack.hackai.entity.KrSum;
import ru.hack.hackai.entity.KsSum;
import ru.hack.hackai.repository.KrSumRepository;
import ru.hack.hackai.repository.KsSumRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KsSumService {
    private final KsSumRepository repository;

    public List<KsSum> getAll() {
        return repository.findAll();
    }

    public List<KsSum> getByCoordinates(Double lat, Double lng ) {
        return repository.findAllByLatAndLng(lat, lng);
    }

}
