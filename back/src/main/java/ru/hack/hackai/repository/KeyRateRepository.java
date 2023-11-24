package ru.hack.hackai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hack.hackai.entity.KeyRate;

public interface KeyRateRepository extends JpaRepository<KeyRate, String> {
}
