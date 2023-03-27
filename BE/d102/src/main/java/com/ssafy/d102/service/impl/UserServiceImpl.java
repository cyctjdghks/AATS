package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.dto.*;
import com.ssafy.d102.data.entity.*;
import com.ssafy.d102.repository.*;
import com.ssafy.d102.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final OrganizationRepository organizationRepository;
    private final UserAttendanceStartRepository userAttendanceStartRepository;
    private final UserAttendanceEndRepository userAttendanceEndRepository;
    private final MembershipRepository membershipRepository;
    private final TimeLimitedMembershipRepository timeLimitedMembershipRepository;
    private final CountBasedMembershipRepository countBasedMembershipRepository;
    private final ImageRepository imageRepository;
    private final PasswordEncoder passwordEncoder;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registUser(UserRegistDto input) {
        Organization organization = organizationRepository.findById(input.getOrganizationId())
                .orElseThrow(() -> new IllegalArgumentException("기관이 없습니다."));

        Image image = imageRepository.findById(input.getUserImage())
                .orElseThrow(() -> new IllegalArgumentException("이미지가 없습니다."));

        User user = User.builder()
                .userId(input.getUserId())
                .userPwd(input.getUserPwd())
                .userName(input.getUserName())
                .organization(organization)
                .userGender(input.getUserGender())
                .userAge(input.getUserAge())
                .userPhone(input.getUserPhone())
                .userEmail(input.getUserEmail())
                .userBirth(input.getUserBirth())
                .userNationality(input.getUserNationality())
                .userStatus(0)
                .Image(image)
                .build();

        userRepository.save(user);
    }

    @Override
    public UserDto loginUser(UserLoginDto input) {
        User user = userRepository.findById(input.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("유저 아이디가 없습니다."));

        if (!passwordEncoder.matches(input.getUserPwd(), user.getUserPwd())) {
            throw new IllegalArgumentException("비밀번호가 다릅니다.");
        }

        UserDto userDto = UserDto.builder()
                .userId(user.getUserId())
                .userName(user.getUserName())
                .organizationId(user.getOrganization().getOrganizationId())
                .userGender(user.getUserGender())
                .userAge(user.getUserAge())
                .userPhone(user.getUserPhone())
                .userEmail(user.getUserEmail())
                .userBirth(user.getUserBirth())
                .userNationality(user.getUserNationality())
                .userStatus(user.getUserStatus())
                .userProfile(null)
//                    .userProfile(user.getUserProfile());
                .userRegistDate(user.getCreated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .userUpdateDate(user.getUpdated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .build();

        return userDto;
    }

    @Override
    @Transactional
    public void updateUser(UserRegistDto input) {
        User user = userRepository.findById(input.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        user.setUserPwd(input.getUserPwd());
        user.setUserName(input.getUserName());
        user.setOrganization(organizationRepository.findById(input.getOrganizationId()).get());
        user.setUserGender(input.getUserGender());
        user.setUserAge(input.getUserAge());
        user.setUserPhone(input.getUserPhone());
        user.setUserEmail(input.getUserEmail());
        user.setUserBirth(input.getUserBirth());
        user.setUserNationality(input.getUserNationality());
    }

    @Override
    public void deleteUser(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));

        userRepository.delete(user);
    }

    @Override
    public boolean validUserId(String userId) {
        return userRepository.existsByUserId(userId);
    }

    @Override
    @Transactional
    public void updateUserPw(UserUpdatePwDto input) {
        User user = userRepository.findById(input.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        user.setUserPwd(input.getUserNewPwd());
    }

    @Override
    public List<UserDto> getAllUser() {
        List<UserDto> list = new ArrayList<>();
        List<User> userlist = userRepository.findAll();

        //TODO : entityToDto 구현 해보기
//        return userlist.stream()
//                .map(UserDto::entityToDto)
//                .collect(Collectors.toList());

        for (User user : userlist) {
            list.add(new UserDto(
                    user.getUserId(),
                    user.getUserName(),
                    user.getOrganization().getOrganizationId(),
                    user.getUserGender(),
                    user.getUserAge(),
                    user.getUserPhone(),
                    user.getUserEmail(),
                    user.getUserBirth(),
                    user.getUserNationality(),
                    user.getUserStatus(),
                    null,
                    user.getCreated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")),
                    user.getUpdated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            ));
        }

        return list;
    }

    @Override
    public UserDto getUser(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        UserDto userDto = UserDto.builder()
                .userId(user.getUserId())
                .userName(user.getUserName())
                .organizationId(user.getOrganization().getOrganizationId())
                .userGender(user.getUserGender())
                .userAge(user.getUserAge())
                .userPhone(user.getUserPhone())
                .userEmail(user.getUserEmail())
                .userBirth(user.getUserBirth())
                .userNationality(user.getUserNationality())
                .userStatus(user.getUserStatus())
//                .userProfile(user.getImage())
                .userProfile(null)
                .userRegistDate(user.getCreated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .userUpdateDate(user.getUpdated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .build();

        return userDto;
    }

    @Override
    @Transactional
    public void startUser(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        user.setUserStatus(1); // 출근함

        UserAttendanceStart userAttendanceStart = UserAttendanceStart.builder()
                .startTime(LocalDateTime.now())
                .user(user)
                .build();

        userAttendanceStartRepository.save(userAttendanceStart);
    }

    @Override
    @Transactional
    public void endUser(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        user.setUserStatus(0); // 퇴근함

        UserAttendanceEnd userAttendanceEnd = UserAttendanceEnd.builder()
                .endTime(LocalDateTime.now())
                .user(user)
                .build();

        userAttendanceEndRepository.save(userAttendanceEnd);
    }

    @Override
    public MembershipDto getUserMembership(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        Membership membership = membershipRepository.findByUser(user);

        MembershipDto membershipDto = new MembershipDto(membership.getMembershipType());

        return membershipDto;
    }

    @Override
    public MembershipTimeDto getUserMembershipTime(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        TimeLimitedMembership timeLimitedMembership = timeLimitedMembershipRepository.findByMembership(
                membershipRepository.findByUser(user)
        );

        MembershipTimeDto membershipTimeDto = new MembershipTimeDto(
                timeLimitedMembership.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")),
                timeLimitedMembership.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
        );

        return membershipTimeDto;
    }

    @Override
    public MembershipCountDto getUserMembershipCount(String userId) {
        //TODO : 콜백 없애기, JPQL로 한번에 해보기
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        CountBasedMembership countBasedMembership = countBasedMembershipRepository.findByMembership(
                membershipRepository.findByUser(user)
        );

        MembershipCountDto membershipCountDto = new MembershipCountDto(
                countBasedMembership.getCount()
        );

        return membershipCountDto;
    }

    @Override
    public CountUserDto countUserAll() {
        CountUserDto countUserDto = new CountUserDto(
                userRepository.findAll().size()
        );

        return countUserDto;
    }

    @Override
    public CountUserDto countUserUseTime() {
        long count = membershipRepository.findAll().stream()
                .filter(membership -> membership.getMembershipType() == 0)
                .filter(membership -> membership.getUser().getUserStatus() == 1)
                .count();

        return new CountUserDto((int) count);
    }

    @Override
    public CountUserDto countUserUseCount() {
        long count = membershipRepository.findAll().stream()
                .filter(membership -> membership.getMembershipType() == 1)
                .filter(membership -> membership.getUser().getUserStatus() == 1)
                .count();

        return new CountUserDto((int) count);
    }

    @Override
    public List<DateTimeDto> getUserStart(String userId) {
        List<DateTimeDto> dateTimeDtos = new ArrayList<>();
        List<UserAttendanceStart> list = userAttendanceStartRepository.findAll().stream()
                .filter(userAttendanceStart -> userAttendanceStart.getUser().getUserId().equals(userId))
                .collect(Collectors.toList());

        for (UserAttendanceStart userAttendanceStart : list) {
            dateTimeDtos.add(new DateTimeDto(
                    userAttendanceStart.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            ));
        }

        return dateTimeDtos;
    }

    @Override
    public List<DateTimeDto> getUserMonthStart(String userId, String month) {
        List<DateTimeDto> dateTimeDtos = new ArrayList<>();
        List<UserAttendanceStart> list = userAttendanceStartRepository.findAll().stream()
                .filter(userAttendanceStart -> userAttendanceStart.getUser().getUserId().equals(userId))
                .filter(userAttendanceStart -> userAttendanceStart.getStartTime().format(DateTimeFormatter.ofPattern("M")).equals(month))
                .collect(Collectors.toList());

        for (UserAttendanceStart userAttendanceStart : list) {
            dateTimeDtos.add(new DateTimeDto(
                    userAttendanceStart.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            ));
        }

        return dateTimeDtos;
    }

    @Override
    public List<DateTimeDto> getUserEnd(String userId) {
        List<DateTimeDto> dateTimeDtos = new ArrayList<>();
        List<UserAttendanceEnd> list = userAttendanceEndRepository.findAll().stream()
                .filter(userAttendanceEnd -> userAttendanceEnd.getUser().getUserId().equals(userId))
                .collect(Collectors.toList());

        for (UserAttendanceEnd userAttendanceEnd : list) {
            dateTimeDtos.add(new DateTimeDto(
                    userAttendanceEnd.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            ));
        }

        return dateTimeDtos;
    }

    @Override
    public List<DateTimeDto> getUserMonthEnd(String userId, String month) {
        List<DateTimeDto> dateTimeDtos = new ArrayList<>();
        List<UserAttendanceEnd> list = userAttendanceEndRepository.findAll().stream()
                .filter(userAttendanceEnd -> userAttendanceEnd.getUser().getUserId().equals(userId))
                .filter(userAttendanceStart -> userAttendanceStart.getEndTime().format(DateTimeFormatter.ofPattern("M")).equals(month))
                .collect(Collectors.toList());

        for (UserAttendanceEnd userAttendanceEnd : list) {
            dateTimeDtos.add(new DateTimeDto(
                    userAttendanceEnd.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            ));
        }

        return dateTimeDtos;
    }
}
