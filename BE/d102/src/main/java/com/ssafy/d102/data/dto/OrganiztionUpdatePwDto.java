package com.ssafy.d102.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrganiztionUpdatePwDto {
    private String organizationId;
    private String organizationPwd;
    private String organizationNewPwd;
}
