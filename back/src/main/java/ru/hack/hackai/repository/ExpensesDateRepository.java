package ru.hack.hackai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hack.hackai.entity.ExpensesDate;

public interface ExpensesDateRepository extends JpaRepository<ExpensesDate, Long> {
}
