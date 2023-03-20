package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.OrganizationLoginDto;
import com.ssafy.d102.service.OrganizationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/organization")
@RequiredArgsConstructor
public class OrganizationController {

    private final OrganizationService service;

    @PostMapping("login")
    public ResponseEntity<?> loginOrganization(@RequestBody OrganizationLoginDto input) {
        Map<String, Object> data = new HashMap<>();
        OrganizationDto organizationDto = service.loginOrganization(input);

        data.put("msg", "success");
        data.put("data", organizationDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("regist")
    public ResponseEntity<?> registOrganization(@RequestBody OrganizationDto input){
        Map<String, Object> data = new HashMap<>();
        service.registOrganization(input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }


}
