package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.OrganizationLoginDto;
import com.ssafy.d102.service.OrganizationService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class OrganizationController {

    @Autowired
    private OrganizationService service;

    @Test
    public void loginOrganization(){

        service.registOrganization(OrganizationDto.builder()
                .organizationId("ssafy")
                .organizationPw("asd123")
                .organizationName("김싸피")
                .build());


        OrganizationLoginDto d = new OrganizationLoginDto();
        d.setOrganizationId("ssafy");
        d.setOrganizationPwd("asd123");

        OrganizationDto dto = service.loginOrganization(d);



        Assertions.assertSame(d.getOrganizationId(),dto.getOrganizationId());

    }

}
