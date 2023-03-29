package com.ssafy.d102.data.dto;

import com.ssafy.d102.data.entity.CCTV;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.format.DateTimeFormatter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class cctvDto {
    private Long cctvNo;
    private Double cctvLat;
    private Double cctvLng;
    private String cctvInformation;
    private String organizationId;
    private String cctvRegistDate;
    private String cctvUpdateDate;

    public cctvDto entityToDto(CCTV cctv) {
        return cctvDto.builder()
                .cctvNo(cctv.getCCTVNo())
                .cctvLat(cctv.getCCTVLat())
                .cctvLng(cctv.getCCTVLng())
                .cctvInformation(cctv.getCCTVInformation())
                .organizationId(cctv.getOrganization().getOrganizationId())
                .cctvRegistDate(cctv.getCreated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .cctvUpdateDate(cctv.getUpdated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .build();
    }
}
