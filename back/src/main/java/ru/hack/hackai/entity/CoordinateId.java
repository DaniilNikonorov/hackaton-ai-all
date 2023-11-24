package ru.hack.hackai.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.IdClass;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CoordinateId implements Serializable {
    Double lng;
    Double lat;
}
