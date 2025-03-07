package com.medicare.api.controller;

import com.medicare.api.response.GenericResponse;
import com.medicare.api.dto.HospitalDto;
import com.medicare.api.service.HospitalService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/hospital/v1")
@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin("*")
public class HospitalController {

    private final HospitalService hospitalService;

    @PostMapping("/add-hospital")
    public ResponseEntity<GenericResponse> addHospital
            (@RequestBody HospitalDto hospitalDto) {
        log.info("inside addHospital : {} ", hospitalDto);
        HospitalDto addedHospital = hospitalService.addHospital(hospitalDto);
        return ResponseEntity.ok(GenericResponse.builder()
                .status(HttpStatus.OK.value())
                .message("SUCCESS")
                .data(addedHospital)
                .build());

    }


    @GetMapping("/get-all-details")
    public ResponseEntity<GenericResponse> getAllDetails() {
        log.info("inside getAllDetails");
        List<HospitalDto> hospitalDto = hospitalService.getAllDetails();
        return ResponseEntity.ok(GenericResponse.builder()
                .status(HttpStatus.OK.value())
                .message("SUCCESS")
                .data(hospitalDto)
                .build());

    }
}
