package ru.hack.hackai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.hack.hackai.dto.RealtyDto;
import ru.hack.hackai.entity.RealtyUniq;
import ru.hack.hackai.repository.RealtyUniqRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RealtyService {
    private final RealtyUniqRepository repository;

    public List<RealtyDto> getAll() {
        return repository.findAll().stream()
                .map(RealtyDto::new)
                .sorted((a,b) -> )
                .toList();
    }

    public Optional<RealtyUniq> getById(Long id) {
        return repository.findById(id);
    }
}
