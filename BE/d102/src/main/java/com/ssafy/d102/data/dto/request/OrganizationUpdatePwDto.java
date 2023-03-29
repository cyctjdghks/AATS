package com.ssafy.d102.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrganizationUpdatePwDto {
    private String organizationId;
    private String organizationPwd;
    private String organizationNewPwd;
}
