package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.Exception.NoContentException;
import com.ssafy.d102.data.Exception.NotMatchException;
import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.OrganizationLoginDto;
import com.ssafy.d102.data.entity.Organization;
import com.ssafy.d102.repository.OrganizationRepository;
import com.ssafy.d102.service.OrganizationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrganizationServiceImpl implements OrganizationService {
    private final OrganizationRepository repository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public OrganizationDto loginOrganization(OrganizationLoginDto input) {
        String id = input.getOrganizationId();

        Organization organization = repository.findById(id)
                .orElseThrow(() -> new NoContentException("Id를 확인해주세요."));

        if(!passwordEncoder.matches(input.getOrganizationPwd(),organization.getOrganizationPw())){
            throw new NotMatchException("PW가 다릅니다.");
        }

        return OrganizationDto.builder()
                .organizationId(organization.getOrganizationId())
                .organizationLng(organization.getOrganizationLng())
                .organizationName(organization.getOrganizationName())
                .organizationLat(organization.getOrganizationLat())
                .organizationSessionId(organization.getOrganizationSessionId())
                .build();
    }

    @Override
    public void registOrganization(OrganizationDto input) {

        repository.save(Organization.builder()
                .organizationId(input.getOrganizationId())
                .organizationPw(passwordEncoder.encode(input.getOrganizationPw()))
                .organizationName(input.getOrganizationName())
                .organizationSessionId(input.getOrganizationSessionId()==null ? null : input.getOrganizationSessionId())
                .organizationLng(input.getOrganizationLng()==null ? null : input.getOrganizationLng())
                .organizationLat(input.getOrganizationLat()==null ? null : input.getOrganizationLat())
                .build());

    }
}
