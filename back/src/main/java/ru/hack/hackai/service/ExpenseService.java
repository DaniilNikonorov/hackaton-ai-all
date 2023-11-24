package ru.hack.hackai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.hack.hackai.dto.ExpensesDto;
import ru.hack.hackai.entity.ExpensesDate;
import ru.hack.hackai.entity.KeyRate;
import ru.hack.hackai.repository.ExpensesDateRepository;
import ru.hack.hackai.repository.KeyRateRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ExpenseService {
    private final ExpensesDateRepository expensesDateRepository;


    public List<ExpensesDto> getAll() {
        return expensesDateRepository.findAll().stream()
                .map(ExpensesDto::new)
                .toList();
    }

    public Optional<ExpensesDate> getById(Long id) {
        return expensesDateRepository.findById(id);
    }
}
