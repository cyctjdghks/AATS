package com.ssafy.d102.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TimeMembershipDto {
    private Long membershipNo;
    private String startTime;
    private String endTime;
}
