package com.medicare.api.repo;

import com.medicare.api.entity.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentsRepo extends JpaRepository<Appointments,Long> {

   List<Appointments> findAllByPersonContact(String phNo);
}
