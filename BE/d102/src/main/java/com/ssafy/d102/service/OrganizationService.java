package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.OrganizationLoginDto;

import java.util.List;

public interface OrganizationService {
    OrganizationDto loginOrganization(OrganizationLoginDto input);

    void registOrganization(OrganizationDto input);

    List<OrganizationDto> getAllOrganization();
}
