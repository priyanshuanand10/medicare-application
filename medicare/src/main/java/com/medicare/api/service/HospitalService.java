package com.medicare.api.service;

import com.medicare.api.dto.HospitalDto;

import java.util.List;

public interface HospitalService {
    HospitalDto addHospital(HospitalDto hospitalDto);

    List<HospitalDto> getAllDetails();
}
