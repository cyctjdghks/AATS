package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.dto.*;
import com.ssafy.d102.data.entity.*;
import com.ssafy.d102.repository.*;
import com.ssafy.d102.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.beans.Transient;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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
    private final PasswordEncoder passwordEncoder;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registUser(UserRegistDto input) {
        userRepository.save(User.builder()
                .userId(input.getUserId())
                .userPwd(input.getUserPwd())
                .userName(input.getUserName())
                .organization(organizationRepository.findById(input.getOrganizationId()).get())
                .userGender(input.getUserGender())
                .userAge(input.getUserAge())
                .userPhone(input.getUserPhone())
                .userEmail(input.getUserEmail())
                .userBirth(input.getUserBirth())
                .userNationality(input.getUserNationality())
                .userStatus(0)
                .userProfile(new byte[0])
//                .userProfile(input.getUserProfile())
                .build());
    }

    @Override
    public UserDto loginUser(UserLoginDto input) {
        //TODO: orElseThrow
        User user = userRepository.findById(input.getUserId()).get();

        //TODO: 조건을 만족하지 않으면 null 던지고 아니면 그냥 리턴하도록? 예외처리를 더 보기 쉽도록
        if (user != null || passwordEncoder.matches(input.getUserPwd(), user.getUserPwd())) {
            return UserDto.builder()
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
        } else {
            return null;
        }

    }

    @Override
    @Transactional
    public void updateUser(String userId, UserRegistDto input) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

//         userRepository.getById(userId);
        user.setUserPwd(input.getUserPwd());
        user.setUserName(input.getUserName());
        user.setOrganization(organizationRepository.findById(input.getOrganizationId()).get());
        user.setUserGender(input.getUserGender());
        user.setUserAge(input.getUserAge());
        user.setUserPhone(input.getUserPhone());
        user.setUserEmail(input.getUserEmail());
        user.setUserBirth(input.getUserBirth());
        user.setUserNationality(input.getUserNationality());
        user.setUserProfile(new byte[0]);
//        userRepository.save(user);
    }

    @Override
    public void deleteUser(String userId) {
        //TODO : orElseThrow | 예외처리 하기
        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {
            userRepository.delete(user.get());
        }
    }

    @Override
    public boolean validUserId(String userId) {
        return userRepository.existsByUserId(userId);
    }

    @Override
    @Transactional
    public void updateUserPw(String userId, UserUpdatePwDto input) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

//        userRepository.getById(userId);
        user.setUserPwd(input.getUserNewPwd());
//        userRepository.save(user);
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

        return new UserDto(
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
        );
    }

    @Override
    @Transactional
    public void startUser(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        user.setUserStatus(1); // 출근함
        userAttendanceStartRepository.save(
                UserAttendanceStart.builder()
                        .startTime(LocalDateTime.now())
                        .user(user)
                        .build()
        );
    }

    @Override
    @Transactional
    public void endUser(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        user.setUserStatus(0); // 퇴근함
        userAttendanceEndRepository.save(
                UserAttendanceEnd.builder()
                        .endTime(LocalDateTime.now())
                        .user(user)
                        .build()
        );
    }

    //TODO
    @Override
    public MembershipDto getUserMembership(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        System.out.println("유저 타입" + membershipRepository.findByUser(user).getMembershipType());
        
        return new MembershipDto(
                membershipRepository.findByUser(user).getMembershipType()
        );
    }

    @Override
    public MembershipTimeDto getUserMembershipTime(String userId) {
        TimeLimitedMembership timeLimitedMembership = timeLimitedMembershipRepository.findByMembership(
                membershipRepository.findByUser(
                        userRepository.findById(userId).get()
                )
        );

        //TODO : 변수로 따로 뺴는거 고려해보기
        return new MembershipTimeDto(
                timeLimitedMembership.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")),
                timeLimitedMembership.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
        );
    }

    @Override
    public MembershipCountDto getUserMembershipCount(String userId) {
        //TODO : 콜백 없애기, JPQL로 한번에 해보기
        CountBasedMembership countBasedMembership = countBasedMembershipRepository.findByMembership(
                membershipRepository.findByUser(
                        userRepository.findById(userId).get()
                )
        );
        return new MembershipCountDto(
                countBasedMembership.getCount()
        );
    }

    @Override
    public CountUserDto countUserAll() {
        return new CountUserDto(
                userRepository.findAll().size()
        );
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
}
