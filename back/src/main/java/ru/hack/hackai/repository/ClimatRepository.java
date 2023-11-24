package ru.hack.hackai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.hack.hackai.entity.Climat;
import ru.hack.hackai.entity.TrSum;

import java.util.List;
import java.util.Optional;

public interface ClimatRepository extends JpaRepository<Climat, Long> {
    Optional<Climat> findByClimatId(Long id);
}
