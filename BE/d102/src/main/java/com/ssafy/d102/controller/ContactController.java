package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.request.ContactDto;
import com.ssafy.d102.data.entity.Contact;
import com.ssafy.d102.service.ContactService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService service;

    @PostMapping("/save")
    public ResponseEntity<?> saveContact(@RequestBody ContactDto contactDto){
        Map<String, Object> data = new HashMap<>();

        service.saveContact(contactDto);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

}
