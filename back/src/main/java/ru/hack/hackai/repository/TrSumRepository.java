package ru.hack.hackai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hack.hackai.entity.KsSum;
import ru.hack.hackai.entity.TrSum;

import java.util.List;

public interface TrSumRepository extends JpaRepository<TrSum, Long> {
    List<TrSum> findAllByLatAndLng(Double lat, Double lng);
}
