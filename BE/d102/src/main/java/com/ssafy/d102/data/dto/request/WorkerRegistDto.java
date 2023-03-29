package com.ssafy.d102.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkerRegistDto {
    private String workerId;
    private String workerPwd;
    private String workerName;
    private String workerOrganizationId;
    private Integer workerGender;
    private Integer workerAge;
    private String workerPhone;
    private String workerEmail;
    private String workerBirth;
    private String workerNationality;
    private Long workerImageId;
}
