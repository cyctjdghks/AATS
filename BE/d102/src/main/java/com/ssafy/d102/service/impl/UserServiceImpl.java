package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.dto.*;
import com.ssafy.d102.data.entity.*;
import com.ssafy.d102.repository.*;
import com.ssafy.d102.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
        User user = userRepository.findById(input.getUserId()).get();

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
    public void updateUser(String userId, UserRegistDto input) {
        userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        User user = userRepository.getById(userId);

        userRepository.save(user.builder()
                .userPwd(input.getUserPwd())
                .userName(input.getUserName())
                .organization(organizationRepository.findById(input.getOrganizationId()).get())
                .userGender(input.getUserGender())
                .userAge(input.getUserAge())
                .userPhone(input.getUserPhone())
                .userEmail(input.getUserEmail())
                .userBirth(input.getUserBirth())
                .userNationality(input.getUserNationality())
                .userProfile(new byte[0])
                .build());
    }

    @Override
    public void deleteUser(String userId) {
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
    public void updateUserPw(String userId, UserUpdatePwDto input) {
//        Optional<User> user = userRepository.findById(input.getUserId());

        userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        User user = userRepository.getById(userId);

            userRepository.save(user.builder()
                    .userPwd(input.getUserNewPwd())
                    .userName(user.getUserName())
                    .organization(user.getOrganization())
                    .userGender(user.getUserGender())
                    .userAge(user.getUserAge())
                    .userPhone(user.getUserPhone())
                    .userEmail(user.getUserEmail())
                    .userBirth(user.getUserBirth())
                    .userNationality(user.getUserNationality())
                    .userProfile(new byte[0])
                    .build());
    }

    @Override
    public List<UserDto> getAllUser() {
        List<UserDto> list = new ArrayList<>();
        List<User> userlist = new ArrayList<>();

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
        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {
            return new UserDto(
                    user.get().getUserId(),
                    user.get().getUserName(),
                    user.get().getOrganization().getOrganizationId(),
                    user.get().getUserGender(),
                    user.get().getUserAge(),
                    user.get().getUserPhone(),
                    user.get().getUserEmail(),
                    user.get().getUserBirth(),
                    user.get().getUserNationality(),
                    user.get().getUserStatus(),
                    null,
                    user.get().getCreated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")),
                    user.get().getUpdated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            );
        } else {
            return null;
        }
    }

    @Override
    public void startUser(String userId) {
        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {
            userAttendanceStartRepository.save(
                    UserAttendanceStart.builder()
                            .startTime(LocalDateTime.now())
                            .user(user.get())
                            .build()
            );
        }
    }

    @Override
    public void endUser(String userId) {
        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {
            userAttendanceEndRepository.save(
                    UserAttendanceEnd.builder()
                            .endTime(LocalDateTime.now())
                            .user(user.get())
                            .build()
            );
        }
    }

    @Override
    public MembershipDto getUserMembership(String userId) {
        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {
            return new MembershipDto(
                    membershipRepository.findByUser(user.get()).getMembershipType()
            );
        } else {
            return null;
        }
    }

    @Override
    public MembershipTimeDto getUserMembershipTime(String userId) {
        TimeLimitedMembership timeLimitedMembership = timeLimitedMembershipRepository.findByMembership(
                membershipRepository.findByUser(
                        userRepository.findById(userId).get()
                )
        );

        return new MembershipTimeDto(
                timeLimitedMembership.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")),
                timeLimitedMembership.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
        );
    }

    @Override
    public MembershipCountDto getUserMembershipCount(String userId) {
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
}
