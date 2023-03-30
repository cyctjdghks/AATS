package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.response.MembershipCountDto;
import com.ssafy.d102.data.dto.response.MembershipTimeDto;
import com.ssafy.d102.data.dto.request.UserLoginDto;
import com.ssafy.d102.data.dto.request.UserRegistDto;
import com.ssafy.d102.data.dto.request.UserUpdatePwDto;
import com.ssafy.d102.data.dto.response.*;

import java.util.List;

public interface UserService {
    void registUser(UserRegistDto input);

    UserDto loginUser(UserLoginDto input);

    void updateUser(UserRegistDto input);

    void deleteUser(String userId);

    boolean validUserId(String userId);

    void updateUserPw(UserUpdatePwDto input);

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

    List<DateTimeDto> getUserMonthStart(String userId, String month);

    List<DateTimeDto> getUserEnd(String userId);

    List<DateTimeDto> getUserMonthEnd(String userId, String month);
}
