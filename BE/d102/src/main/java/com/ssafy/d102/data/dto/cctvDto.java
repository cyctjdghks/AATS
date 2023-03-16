package com.ssafy.d102.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class cctvDto {
    private Long cctvNo;
    private Float cctvLat;
    private Float cctvLng;
    private String cctvInformation;
    private String organizationId;
    private String cctvRegistDate;
    private String cctvUpdateDate;
}
