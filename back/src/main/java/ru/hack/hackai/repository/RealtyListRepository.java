package ru.hack.hackai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hack.hackai.entity.RealtyListYear;

import java.util.List;

public interface RealtyListRepository extends JpaRepository<RealtyListYear, Integer> {
    List<RealtyListYear> findAllByObjectId(String objectId);
}
