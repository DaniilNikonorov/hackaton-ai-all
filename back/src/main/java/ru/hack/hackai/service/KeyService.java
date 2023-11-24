package ru.hack.hackai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.hack.hackai.entity.KeyRate;
import ru.hack.hackai.repository.KeyRateRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KeyService {
    private final KeyRateRepository keyRateRepository;

    public List<KeyRate> getAll() {
        return keyRateRepository.findAll();
    }

}
