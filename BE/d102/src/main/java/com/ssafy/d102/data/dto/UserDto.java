package com.ssafy.d102.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private String userId;
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
    private String userRegistDate;
    private String userUpdateDate;
}
