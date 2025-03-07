package com.medicare.api.serviceImpl;

import com.medicare.api.dto.AppointmentsDto;
import com.medicare.api.dto.HospitalDto;
import com.medicare.api.entity.Appointments;
import com.medicare.api.entity.Hospital;
import com.medicare.api.repo.HospitalRepo;
import com.medicare.api.service.HospitalService;
import com.medicare.api.util.MedicareUtility;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class HospitalServiceImpl implements HospitalService {

    private final HospitalRepo hospitalRepo;

    @Override
    public HospitalDto addHospital(HospitalDto hospitalDto) {
        log.info(" inside service : {}", hospitalDto);
        Hospital entity = MedicareUtility.toEntity(hospitalDto, Hospital.class);
        Hospital savedEntity = hospitalRepo.save(entity);
        return MedicareUtility.toDto(savedEntity, HospitalDto.class);
    }

    @Override
    public List<HospitalDto> getAllDetails() {
        log.info(" inside getAllDetails ");
        List<Hospital> hospitalDetails = hospitalRepo.findAll();

        return hospitalDetails.stream().map(e -> {
            HospitalDto hospitalDto = MedicareUtility.toDto(e, HospitalDto.class);
//            List<Appointments> appointments = e.getAppointments();
//            List<AppointmentsDto> appointmentsDtos = appointments.stream().map(f -> MedicareUtility.toDto(f, AppointmentsDto.class)).toList();
//            hospitalDto.setAppointments(appointmentsDtos);
            return hospitalDto;
        }).toList();
    }
}
