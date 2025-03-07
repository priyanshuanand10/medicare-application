package com.medicare.api.service;

import com.medicare.api.requests.ScheduledRequest;
import com.medicare.api.dto.AppointmentsDto;
import com.medicare.api.dto.AppointmentsRecordDto;

import java.util.List;

public interface AppointmentService {
    AppointmentsDto bookAppointment(AppointmentsDto appointmentsDto,Long hid);

    List<AppointmentsRecordDto>  getScheduledRecordByPhNo(ScheduledRequest scheduledRequest);
}
