package com.ssafy.d102.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class cctvRegistDto {
    private Double cctvLat;
    private Double cctvLng;
    private String cctvInformation;
    private String organizationId;
}
