package com.ssafy.d102.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.ssafy.d102.data.Exception.NotMatchException;
import com.ssafy.d102.data.dto.OrganizationLoginDto;
import com.ssafy.d102.data.dto.UserLoginDto;
import com.ssafy.d102.data.entity.Image;
import com.ssafy.d102.service.ImageService;
import com.ssafy.d102.service.impl.ImageServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ImageController {

    private final ImageService imageService;

    // Not Used
    @PostMapping("/image")
    public ResponseEntity<?> saveImage(@RequestPart(name = "image", required = false) MultipartFile files) {
        Map<String, Object> data = new HashMap<>();
        if (files == null)
            throw new NotMatchException("파일이 없습니다.");

        long id = imageService.addImage(Image.builder().build(), files);

        data.put("msg","success");
        data.put("data", id);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/getimage/{imageId}")
    public String getBoard(@PathVariable long imageId) {
        Image image = imageService.findImage(imageId)
                .orElseThrow(() -> new NotMatchException("Image Id를 확인해주세요."));

        String imgPath = image.getStoredFileName();
        log.info(imgPath);
        return imgPath;
    }




}