package com.ssafy.d102.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkerUpdatePwDto {
    private String workerId;
    private String workerPwd;
    private String workerNewPwd;
}
