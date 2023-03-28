package com.ssafy.d102.data.dto;

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
    private String organizationSessionId;
}
