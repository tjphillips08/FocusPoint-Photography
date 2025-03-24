package com.example.photography_backend.repositories;

import com.example.photography_backend.models.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}

