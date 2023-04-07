package com.ssafy.d102.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WorkerLoginDto {
    @NotNull
    private String workerId;
    @NotNull
    private String workerPwd;
}
