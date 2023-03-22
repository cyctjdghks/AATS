package com.ssafy.d102.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// 이건 왜 필요한거?
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrganizationRegistDto {
    private String organizationId;
    private String organizationPwd;
    private String organizationName;
    private Float organizationLng;
    private Float organizationLat;
    private String organizationSessionId;
    private String organizationRegistDate;
    private String organizationUpdateDate;
}
