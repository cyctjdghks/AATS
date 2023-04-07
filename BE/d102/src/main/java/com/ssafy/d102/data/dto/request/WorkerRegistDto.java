package com.ssafy.d102.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkerRegistDto {
    @NotNull
    private String workerId;
    @NotNull
    private String workerPwd;
    @NotNull
    private String workerName;
    @NotNull
    private String organizationId;
    private Integer workerGender;
    private Integer workerAge;
    private String workerPhone;
    private String workerEmail;
    private String workerBirth;
    private String workerNationality;
    @NotNull
    private Long workerImageId;
}
