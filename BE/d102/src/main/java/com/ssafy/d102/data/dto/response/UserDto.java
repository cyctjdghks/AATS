package com.ssafy.d102.data.dto.response;

import com.ssafy.d102.data.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
    @NotNull
    private String userId;
    private String userName;
    private String organizationId;
    private String organizationName;
    private Integer userGender;
    private Integer userAge;
    private String userPhone;
    @Email
    private String userEmail;
    private String userBirth;
    private String userNationality;
    private Integer userStatus;
    private Long userProfile;
    private String userProfilePath;

    public UserDto entityToDto(User user){
        return UserDto.builder()
                .userId(user.getUserId())
                .userName(user.getUserName())
                .organizationId(user.getOrganization()==null ? null : user.getOrganization().getOrganizationId())
                .organizationName(user.getOrganization()==null ? null : user.getOrganization().getOrganizationName())
                .userGender(user.getUserGender())
                .userAge(user.getUserAge())
                .userPhone(user.getUserPhone())
                .userEmail(user.getUserEmail())
                .userBirth(user.getUserBirth())
                .userNationality(user.getUserNationality())
                .userStatus(user.getUserStatus())
                .userProfile(user.getImage()==null ? null: user.getImage().getImageId())
                .userProfilePath(user.getImage()==null ? null: user.getImage().getStoredFileName())
                .build();
    }
}
