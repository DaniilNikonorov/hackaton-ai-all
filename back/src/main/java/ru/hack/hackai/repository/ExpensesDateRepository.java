package ru.hack.hackai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hack.hackai.entity.Expenses;

import java.util.List;

public interface ExpensesDateRepository extends JpaRepository<Expenses, Long> {
    List<Expenses> findAllByLatAndLng(Double lat, Double lng);
}
