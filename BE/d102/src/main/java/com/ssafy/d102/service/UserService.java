package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.*;

import java.util.List;

public interface UserService {
    void registUser(UserRegistDto input);

    UserDto loginUser(UserLoginDto input);

    void updateUser(String userId, UserRegistDto input);

    void deleteUser(String userId);

    boolean validUserId(String userId);

    void updateUserPw(String userId, UserUpdatePwDto input);

    List<UserDto> getAllUser();

    UserDto getUser(String userId);

    void startUser(String userId);

    void endUser(String userId);

    MembershipDto getUserMembership(String userId);

    MembershipTimeDto getUserMembershipTime(String userId);

    MembershipCountDto getUserMembershipCount(String userId);

    CountUserDto countUserAll();

    CountUserDto countUserUseTime();

    CountUserDto countUserUseCount();

    List<DateTimeDto> getUserStart(String userId);

    List<DateTimeDto> getUserEnd(String userId);
}
