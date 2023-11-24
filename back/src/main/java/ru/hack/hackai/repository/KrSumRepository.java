package ru.hack.hackai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hack.hackai.entity.Expenses;
import ru.hack.hackai.entity.KrSum;

import java.util.List;

public interface KrSumRepository extends JpaRepository<KrSum, Long> {
    List<KrSum> findAllByLatAndLng(Double lat, Double lng);
}
