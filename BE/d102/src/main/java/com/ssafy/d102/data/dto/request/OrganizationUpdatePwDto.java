package com.ssafy.d102.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrganizationUpdatePwDto {
    @NotNull
    private String organizationId;
    @NotNull
    private String organizationPwd;
    @NotNull
    private String organizationNewPwd;
}
