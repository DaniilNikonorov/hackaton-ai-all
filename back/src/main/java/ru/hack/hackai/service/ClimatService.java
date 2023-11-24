package ru.hack.hackai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.hack.hackai.dto.ClimatDto;
import ru.hack.hackai.dto.ExpensesDto;
import ru.hack.hackai.entity.Expenses;
import ru.hack.hackai.repository.ClimatRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClimatService {
    private final ClimatRepository repository;

    public List<ClimatDto> getAll() {
        return repository.findAll().stream()
                .map(ClimatDto::new)
                .toList();
    }

    public ClimatDto getByClimatId(Long id) {
        return repository.findByClimatId(id)
                .map(ClimatDto::new)
                .orElseThrow(() -> new RuntimeException("Не удалось найти"));
    }
}
