package ru.hack.hackai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.hack.hackai.entity.KsSum;
import ru.hack.hackai.entity.TrSum;
import ru.hack.hackai.repository.TrSumRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TrSumService {
    private final TrSumRepository repository;

    public List<TrSum> getAll() {
        return repository.findAll();
    }

    public List<TrSum> getByCoordinates(Double lat, Double lng ) {
        return repository.findAllByLatAndLng(lat, lng);
    }
}
