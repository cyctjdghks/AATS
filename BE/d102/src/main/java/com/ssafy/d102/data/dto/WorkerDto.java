package com.ssafy.d102.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkerDto {
    private String workerId;
    private String workerName;
    private Integer workerStatus;
    private String organizationId;
    private Integer workerGender;
    private Integer workerAge;
    private String workerPhone;
    private String workerEmail;
    private String workerBirth;
    private String workerNationality;
    private String workerProfile;
    private String workerRegistDate;
    private String workerUpdateDate;
}
