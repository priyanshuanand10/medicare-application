package com.medicare.api.serviceImpl;

import com.medicare.api.requests.ScheduledRequest;
import com.medicare.api.dto.AppointmentsDto;
import com.medicare.api.dto.AppointmentsRecordDto;
import com.medicare.api.entity.Appointments;
import com.medicare.api.entity.Hospital;
import com.medicare.api.repo.AppointmentsRepo;
import com.medicare.api.repo.HospitalRepo;
import com.medicare.api.service.AppointmentService;
import com.medicare.api.util.MedicareUtility;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentsRepo appointmentsRepo;
    private final HospitalRepo hospitalRepo;

    @Override
    public AppointmentsDto bookAppointment(AppointmentsDto appointmentsDto, Long hid) {
        log.info("inside bookAppointment : {}", appointmentsDto);
        Hospital hospital = hospitalRepo.findById(hid).orElseThrow(() -> new RuntimeException("RECORD NOT FOUND"));
        Appointments entity = MedicareUtility.toEntity(appointmentsDto, Appointments.class);
        entity.setHospital(hospital);
        Appointments savedEntity = appointmentsRepo.save(entity);
        return MedicareUtility.toDto(savedEntity, AppointmentsDto.class);
    }

    @Override
    public List<AppointmentsRecordDto> getScheduledRecordByPhNo(ScheduledRequest scheduledRequest) {
        log.info("inside getScheduledRecordByPhNo : {}", scheduledRequest);
        List<Appointments> allByPersonContact = appointmentsRepo.findAllByPersonContact(scheduledRequest.getPhNo());
        return allByPersonContact.stream().map(e -> MedicareUtility.toDto(e, AppointmentsRecordDto.class)).toList();
    }
}
