package com.medicare.api.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AppointmentsDto {
    private Long aId;
    private String personName;
    private Integer personAge;
    private String personContact;
    private String personDesc;
    private String status;
}
