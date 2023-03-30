package com.ssafy.d102.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkerUpdatePwDto {
    @NotNull
    private String workerId;
    @NotNull
    private String workerPwd;
    @NotNull
    private String workerNewPwd;
}
