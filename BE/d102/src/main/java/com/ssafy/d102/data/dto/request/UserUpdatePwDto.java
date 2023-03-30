package com.ssafy.d102.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdatePwDto {
    @NotNull
    private String userId;
    @NotNull
    private String userPwd;
    @NotNull
    private String userNewPwd;
}
