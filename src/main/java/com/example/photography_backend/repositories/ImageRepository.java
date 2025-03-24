package com.example.photography_backend.repositories;

import com.example.photography_backend.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
