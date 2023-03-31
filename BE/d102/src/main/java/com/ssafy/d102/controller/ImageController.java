package com.ssafy.d102.controller;

import com.ssafy.d102.data.Exception.NotMatchException;
import com.ssafy.d102.data.dto.response.AllPeople;
import com.ssafy.d102.data.entity.Image;
import com.ssafy.d102.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ImageController {

    private final ImageService imageService;

    // Not Used
//    @PostMapping("/image")
//    public ResponseEntity<?> saveImage(@RequestPart(name = "image", required = false) MultipartFile files) {
//        Map<String, Object> data = new HashMap<>();
//        if (files == null)
//            throw new NotMatchException("파일이 없습니다.");
//
//        long id = imageService.addImage(Image.builder().build(), files);
//
//        data.put("msg","success");
//        data.put("data", id);
//
//        return new ResponseEntity<>(data, HttpStatus.OK);
//    }
//
//    @GetMapping("/getimage/{imageId}")
//    public String getBoard(@PathVariable long imageId) {
//        Image image = imageService.findImage(imageId)
//                .orElseThrow(() -> new NotMatchException("Image Id를 확인해주세요."));
//
//        String imgPath = image.getStoredFileName();
//        log.info(imgPath);
//        return imgPath;
//    }


    @GetMapping("/getallpeople")
    public ResponseEntity<?> getAllPeople(){
        Map<String, Object> data = new HashMap<>();

        AllPeople allPeople = imageService.getAllPeople();

        data.put("msg", "success");
        data.put("data", allPeople);

        return new ResponseEntity<>(data, HttpStatus.OK);

    }




}