package com.medicare.api.controller;

import com.medicare.api.requests.ScheduledRequest;
import com.medicare.api.dto.AppointmentsDto;
import com.medicare.api.dto.AppointmentsRecordDto;
import com.medicare.api.response.GenericResponse;
import com.medicare.api.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/appointment/v1")
@CrossOrigin("*")
public class AppointmentController {

    private final AppointmentService appointmentService;

    @PostMapping("/book-appointment/{hId}")
    public ResponseEntity<GenericResponse> bookAppointment(@RequestBody AppointmentsDto appointmentsDto,
                                                           @PathVariable("hId") Long hid) {
        log.info("inside bookAppointment : {}", appointmentsDto);
        AppointmentsDto savedAppointment = appointmentService.bookAppointment(appointmentsDto, hid);
        return ResponseEntity.ok(
                GenericResponse.builder()
                        .status(HttpStatus.OK.value())
                        .message("SUCCESS")
                        .data(savedAppointment).build()
        );
    }

    @PostMapping("/get-scheduled")
    public ResponseEntity<GenericResponse> getScheduled(@RequestBody ScheduledRequest scheduledRequest) {
        log.info("inside getScheduled : {}", scheduledRequest);
        List<AppointmentsRecordDto> getAppointments = appointmentService.getScheduledRecordByPhNo(scheduledRequest);
        return ResponseEntity.ok(
                GenericResponse.builder()
                        .status(HttpStatus.OK.value())
                        .message("SUCCESS")
                        .data(getAppointments).build()
        );
    }


}
