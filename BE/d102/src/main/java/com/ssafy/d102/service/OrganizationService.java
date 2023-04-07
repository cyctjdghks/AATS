package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.request.OrganizationLoginDto;
import com.ssafy.d102.data.dto.request.OrganizationUpdatePwDto;
import com.ssafy.d102.data.dto.response.UserDto;
import com.ssafy.d102.data.dto.response.WorkerDto;

import java.util.List;

public interface OrganizationService {
    OrganizationDto loginOrganization(OrganizationLoginDto input);

    List<UserDto> getAllUserByOrganization(String organizationId);

    void registOrganization(OrganizationDto input);

    List<OrganizationDto> getAllOrganization();

    OrganizationDto getOrganization(String organizationId);

    OrganizationDto updateOrganization(OrganizationDto organizationDto);

    boolean validOrganizationId(String organizationId);

    void changePw(OrganizationUpdatePwDto organizationUpdatePwDto);

    List<WorkerDto> getAllWorkerByOrganization(String organizationId);
}
