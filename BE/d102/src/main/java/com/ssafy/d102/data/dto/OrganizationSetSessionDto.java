package com.ssafy.d102.data.dto;

import lombok.*;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrganizationSetSessionDto {
    private String OrganizationId;
    private String SessionId;
}
