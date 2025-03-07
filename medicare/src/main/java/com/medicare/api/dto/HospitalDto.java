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
public class HospitalDto {
    private Long hId;
    private String name;
    private String contactInfo;
    private String address;
    private List<AppointmentsDto> appointments = new ArrayList<>();
}
