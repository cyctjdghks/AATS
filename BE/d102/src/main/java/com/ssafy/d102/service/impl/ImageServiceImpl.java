package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.dto.response.AllPeople;
import com.ssafy.d102.data.entity.Image;
import com.ssafy.d102.repository.ImageRepository;
import com.ssafy.d102.repository.OrganizationRepository;
import com.ssafy.d102.repository.UserRepository;
import com.ssafy.d102.repository.WorkerRepository;
import com.ssafy.d102.service.ImageService;
import com.ssafy.d102.structure.File.FileHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepository;

    private final FileHandler fileHandler;

    private final OrganizationRepository organizationRepository;
    private final WorkerRepository workerRepository;
    private final UserRepository userRepository;


    public long addImage(Image image, MultipartFile files) {
        // 파일을 저장하고 그 Board 에 대한 list 를 가지고 있는다
        Image list = fileHandler.parseFileInfo(image.getImageId(), files);

        // 파일에 대해 DB에 저장하고 가지고 있을 것
            imageRepository.save(list);

        return list.getImageId();

    }


    public Optional<Image> findImage(Long id) {
        return imageRepository.findById(id);
    }

    @Override
    public AllPeople getAllPeople() {

        return new AllPeople().builder()
                .organization(organizationRepository.findAll().size())
                .user(userRepository.findAll().size())
                .worker(workerRepository.findAll().size())
                .build();
    }


}