package ru.hack.hackai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hack.hackai.entity.Expenses;

public interface ExpensesDateRepository extends JpaRepository<Expenses, Long> {
}
