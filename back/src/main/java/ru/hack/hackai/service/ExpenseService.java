package ru.hack.hackai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.hack.hackai.dto.ExpensesDto;
import ru.hack.hackai.dto.ExpensesFullDto;
import ru.hack.hackai.entity.Expenses;
import ru.hack.hackai.repository.ExpensesDateRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

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

    public Set<ExpensesFullDto> getByCoordinates(Double lat, Double lng) {
        return expensesDateRepository.findAllByLatAndLng(lat, lng).stream()
                .filter(exp -> {
                    try {
                        if (Double.parseDouble(exp.getSum()) > 0) {
                            return true;
                        }
                        return false;
                    } catch (Exception e) {
                        return false;
                    }
                })
                .map(ExpensesFullDto::new)
                .collect(Collectors.toSet());
    }
}
