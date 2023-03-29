package com.ssafy.d102.data.dto;

import com.ssafy.d102.data.entity.Organization;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrganizationDto {
    private String organizationId;
    private String organizationPw;
    private String organizationName;
    private Double organizationLng;
    private Double organizationLat;

    public OrganizationDto entityToDto(Organization organization) {
        return OrganizationDto.builder()
                .organizationId(organization.getOrganizationId())
                .organizationName(organization.getOrganizationName())
                .organizationLng(organization.getOrganizationLng())
                .organizationLat(organization.getOrganizationLat())
                .build();
    }
}
