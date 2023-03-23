package com.ssafy.d102.data.dto;

import com.ssafy.d102.data.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
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
    private Integer userStatus;
    private String userProfile;
    private String userRegistDate;
    private String userUpdateDate;

    public static UserDto entityToDto(User user){
        return UserDto.builder()

                .build();
    }
}
