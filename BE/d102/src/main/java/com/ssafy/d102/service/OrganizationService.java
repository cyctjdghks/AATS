package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.OrganizationLoginDto;

public interface OrganizationService {
    OrganizationDto loginOrganization(OrganizationLoginDto input);

    void registOrganization(OrganizationDto input);
}
