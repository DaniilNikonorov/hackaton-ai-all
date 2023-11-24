package ru.hack.hackai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hack.hackai.entity.Expenses;
import ru.hack.hackai.entity.KsSum;

import java.util.List;

public interface KsSumRepository extends JpaRepository<KsSum, Long> {
    List<KsSum> findAllByLatAndLng(Double lat, Double lng);
}
