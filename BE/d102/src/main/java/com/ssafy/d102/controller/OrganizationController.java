package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.OrganizationLoginDto;
import com.ssafy.d102.service.OrganizationService;
import com.ssafy.d102.structure.jwt.JwtProvider;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/organization")
@RequiredArgsConstructor
public class OrganizationController {

    private final OrganizationService service;
    private final JwtProvider jwtProvider;

    @PostMapping("/login")
    public ResponseEntity<?> loginOrganization(@RequestBody OrganizationLoginDto input, HttpServletResponse response) {
        Map<String, Object> data = new HashMap<>();
        OrganizationDto organizationDto = service.loginOrganization(input);

        String Key = jwtProvider.createToken(organizationDto);

        data.put("msg", "success");
        data.put("data", organizationDto);

        Cookie cookie = new Cookie("Authorization", Key);
        cookie.setMaxAge(60*60);
        cookie.setPath("/be");
        response.addCookie(cookie);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/regist")
    public ResponseEntity<?> registOrganization(@RequestBody OrganizationDto input){
        Map<String, Object> data = new HashMap<>();
        service.registOrganization(input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAllOrganization(){
        Map<String, Object> data = new HashMap<>();
        List<OrganizationDto> list = service.getAllOrganization();

        data.put("msg", "success");
        data.put("data", list);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }


}
