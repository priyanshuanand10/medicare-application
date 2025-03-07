package com.medicare.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AppointmentsRecordDto {
    private Long aId;
    private String personName;
    private Integer personAge;
    private String personContact;
    private String personDesc;
    private String status;
    private HospitalRecordDto hospital;
}
