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
public class UserRegistDto {
    @NotNull
    private String userId;
    @NotNull
    private String userPwd;
    @NotNull
    private String userName;
    @NotNull
    private String organizationId;
    private Integer userGender;
    private Integer userAge;
    private String userPhone;
    private String userEmail;
    private String userBirth;
    private String userNationality;
    @NotNull
    private Long userImageId;
}
