package com.ssafy.d102.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistDto {
    private String userId;
    private String userPwd;
    private String userName;
    private String organizationId;
    private Integer userGender;
    private Integer userAge;
    private String userPhone;
    private String userEmail;
    private String userBirth;
    private String userNationality;
    private String userStatus;
    private String userProfile;
}
