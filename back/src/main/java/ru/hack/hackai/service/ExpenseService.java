package ru.hack.hackai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.hack.hackai.dto.ExpensesDto;
import ru.hack.hackai.dto.ExpensesFullDto;
import ru.hack.hackai.entity.Expenses;
import ru.hack.hackai.repository.ExpensesDateRepository;

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

    public Optional<Expenses> getById(Long id) {
        return expensesDateRepository.findById(id);
    }

    public List<ExpensesFullDto> getByCoordinates(Double lat, Double lng ) {
        return expensesDateRepository.findAllByLatAndLng(lat, lng).stream()
                .map(ExpensesFullDto::new)
                .toList();
    }
}
