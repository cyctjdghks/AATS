package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.response.AllPeople;
import com.ssafy.d102.data.entity.Image;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface ImageService {
    long addImage(Image image, MultipartFile files);
    Optional<Image> findImage(Long id);

    AllPeople getAllPeople();
}
