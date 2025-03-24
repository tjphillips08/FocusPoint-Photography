package com.example.photography_backend.controllers;

import com.example.photography_backend.models.Image;
import com.example.photography_backend.repositories.ImageRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/images")
public class ImageController {
    private final ImageRepository imageRepository;

    public ImageController(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @GetMapping
    public List<Image> getImages() {
        return imageRepository.findAll();
    }

    @PostMapping
    public Image uploadImage(@RequestBody Image image) {
        return imageRepository.save(image);
    }
}
