package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.dto.request.UserGetMonthDto;
import com.ssafy.d102.data.dto.response.MembershipCountDto;
import com.ssafy.d102.data.dto.response.MembershipTimeDto;
import com.ssafy.d102.data.dto.request.UserLoginDto;
import com.ssafy.d102.data.dto.request.UserRegistDto;
import com.ssafy.d102.data.dto.request.UserUpdatePwDto;
import com.ssafy.d102.data.dto.response.*;
import com.ssafy.d102.data.entity.*;
import com.ssafy.d102.repository.*;
import com.ssafy.d102.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
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
        Organization organization = getOrganizationById(input.getOrganizationId());

        Image image = getImageById(input.getUserImageId());

        User user = User.builder()
                .userId(input.getUserId())
                .userPwd(passwordEncoder.encode(input.getUserPwd()))
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
        User user = getUserById(input.getUserId());

        if (!passwordEncoder.matches(input.getUserPwd(), user.getUserPwd())) {
            throw new IllegalArgumentException("비밀번호가 다릅니다.");
        }

        //TODO : entityToDto (Done)


        return new UserDto().entityToDto(user);
    }

    @Override
    @Transactional
    public void updateUser(UserRegistDto input) {
        User user = getUserById(input.getUserId());

        Image image = getImageById(input.getUserImageId());

        user.setUserPwd(input.getUserPwd());
        user.setUserName(input.getUserName());
        //TODO
        user.setOrganization(getOrganizationById(input.getOrganizationId()));
        user.setUserGender(input.getUserGender());
        user.setUserAge(input.getUserAge());
        user.setUserPhone(input.getUserPhone());
        user.setUserEmail(input.getUserEmail());
        user.setUserBirth(input.getUserBirth());
        user.setUserNationality(input.getUserNationality());
        user.setImage(image);
    }

    @Override
    public void deleteUser(String userId) {
        User user = getUserById(userId);

        userRepository.delete(user);
    }

    @Override
    public boolean validUserId(String userId) {
        return userRepository.existsByUserId(userId);
    }

    @Override
    @Transactional
    public void updateUserPw(UserUpdatePwDto input) {
        User user = getUserById(input.getUserId());

        if(!passwordEncoder.matches(input.getUserPwd(),user.getUserPwd()))
            throw new IllegalArgumentException("패스워드가 다릅니다.");
        user.setUserPwd(passwordEncoder.encode(input.getUserNewPwd()));

        userRepository.save(user);

    }

    @Override
    public List<UserDto> getAllUser() {
        List<UserDto> list = new ArrayList<>();
        List<User> userlist = userRepository.findAll();

        //TODO : entityToDto 구현 해보기
//        return userRepository.findAll().stream()
//                .map(UserDto::entityToDto)
//                .collect(Collectors.toList());

        for (User user : userlist) {
            list.add(new UserDto().entityToDto(user));
        }

        return list;
    }

    @Override
    public UserDto getUser(String userId) {
        User user = getUserById(userId);

        //TODO

        return new UserDto().entityToDto(user);
    }

    @Override
    @Transactional
    public void startUser(String userId) {
        User user = getUserById(userId);

        user.setUserStatus(1); // 출근함

        UserAttendanceStart userAttendanceStart = UserAttendanceStart.builder()
                .startTime(LocalDateTime.now().plusHours(9))
                .user(user)
                .build();

        userRepository.save(user);
        userAttendanceStartRepository.save(userAttendanceStart);
    }

    @Override
    @Transactional
    public void endUser(String userId) {
        User user = getUserById(userId);

        user.setUserStatus(0); // 퇴근함

        UserAttendanceEnd userAttendanceEnd = UserAttendanceEnd.builder()
                .endTime(LocalDateTime.now().plusHours(9))
                .user(user)
                .build();

        userRepository.save(user);
        userAttendanceEndRepository.save(userAttendanceEnd);
    }

    @Override
    public MembershipDto getUserMembership(String userId) {
        User user = getUserById(userId);

        Membership membership = getMembershipByUser(user);

        MembershipDto membershipDto = new MembershipDto(membership.getMembershipType());

        return membershipDto;
    }

    @Override
    public MembershipTimeDto getUserMembershipTime(String userId) {
        User user = getUserById(userId);

        Membership membership = getMembershipByUser(user);

        if(membership.getMembershipType() != 0) {
            throw new IllegalArgumentException("기간제 회원이 아닙니다.");
        }

        TimeLimitedMembership timeLimitedMembership = getTimeLimitedMembershipByMembership(membership);

        MembershipTimeDto membershipTimeDto = new MembershipTimeDto(
                timeLimitedMembership.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")),
                timeLimitedMembership.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
        );


        return membershipTimeDto;
    }

    @Override
    public MembershipCountDto getUserMembershipCount(String userId) {
        //TODO : 콜백 없애기, JPQL로 한번에 해보기
        User user = getUserById(userId);

        Membership membership = getMembershipByUser(user);

        if(membership.getMembershipType() != 1) {
            throw new IllegalArgumentException("횟수제 회원이 아닙니다.");
        }

        CountBasedMembership countBasedMembership = getCountBasedMembershipByMembership(membership);

        MembershipCountDto membershipCountDto = new MembershipCountDto(
                countBasedMembership.getCount()
        );

        return membershipCountDto;
    }

    @Override
    public CountUserDto countUserAll() {
        //TODO
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
                //TODO : 여기에 map으로 밑에 로직 해결해보기
                .collect(Collectors.toList());

        if(list.size() == 0) return dateTimeDtos;

        dateTimeDtos.add(new DateTimeDto(list.get(0).getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))));

        for(int i=0;i<list.size()-1; i++){
            UserAttendanceStart temp = list.get(i);
            UserAttendanceStart temp2 = list.get(i+1);

            if(ChronoUnit.DAYS.between(temp.getStartTime(),temp2.getStartTime()) != 0 ){
                dateTimeDtos.add(new DateTimeDto(
                        temp2.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
                ));
            }

        }

        return dateTimeDtos;
    }

    @Override
    public List<DateTimeDto> getUserMonthStart(UserGetMonthDto userGetMonthDto) {

        String userId = userGetMonthDto.getUserId();
        String month = userGetMonthDto.getMonth();
        String year = userGetMonthDto.getYear();

        List<DateTimeDto> dateTimeDtos = new ArrayList<>();
        List<UserAttendanceStart> list = userAttendanceStartRepository.findAll().stream()
                .filter(userAttendanceStart -> userAttendanceStart.getUser().getUserId().equals(userId))
                .filter(userAttendanceStart -> userAttendanceStart.getStartTime().format(DateTimeFormatter.ofPattern("M")).equals(month))
                .filter(userAttendanceStart -> userAttendanceStart.getStartTime().format(DateTimeFormatter.ofPattern("yyyy")).equals(year))
                //TODO
                .collect(Collectors.toList());

        if(list.size() == 0) return dateTimeDtos;

        dateTimeDtos.add(new DateTimeDto(list.get(0).getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))));

        for(int i=0;i<list.size()-1; i++){
            UserAttendanceStart temp = list.get(i);
            UserAttendanceStart temp2 = list.get(i+1);

            if(ChronoUnit.DAYS.between(temp.getStartTime(),temp2.getStartTime()) != 0 ){
                dateTimeDtos.add(new DateTimeDto(
                        temp2.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
                ));
            }

        }

        return dateTimeDtos;
    }

    @Override
    public List<DateTimeDto> getUserEnd(String userId) {
        List<DateTimeDto> dateTimeDtos = new ArrayList<>();
        List<UserAttendanceEnd> list = userAttendanceEndRepository.findAll().stream()
                .filter(userAttendanceEnd -> userAttendanceEnd.getUser().getUserId().equals(userId))
                //TODO
                .collect(Collectors.toList());

        if(list.size() == 0) return dateTimeDtos;

        dateTimeDtos.add(new DateTimeDto(list.get(list.size()-1).getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))));

        for(int i=list.size()-1;i>0; i--){
            UserAttendanceEnd temp = list.get(i);
            UserAttendanceEnd temp2 = list.get(i-1);

            if(ChronoUnit.DAYS.between(temp.getEndTime(),temp2.getEndTime()) != 0 ){
                dateTimeDtos.add(new DateTimeDto(
                        temp2.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
                ));
            }

        }

        return dateTimeDtos;
    }

    @Override
    public List<DateTimeDto> getUserMonthEnd(UserGetMonthDto userGetMonthDto) {

        String userId = userGetMonthDto.getUserId();
        String month = userGetMonthDto.getMonth();
        String year = userGetMonthDto.getYear();

        List<DateTimeDto> dateTimeDtos = new ArrayList<>();
        List<UserAttendanceEnd> list = userAttendanceEndRepository.findAll().stream()
                .filter(userAttendanceEnd -> userAttendanceEnd.getUser().getUserId().equals(userId))
                .filter(userAttendanceStart -> userAttendanceStart.getEndTime().format(DateTimeFormatter.ofPattern("M")).equals(month))
                .filter(userAttendanceStart -> userAttendanceStart.getEndTime().format(DateTimeFormatter.ofPattern("yyyy")).equals(year))
                //TODO
                .collect(Collectors.toList());

        if(list.size() == 0) return dateTimeDtos;

        dateTimeDtos.add(new DateTimeDto(list.get(list.size()-1).getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))));

        for(int i=list.size()-1;i>0; i--){
            UserAttendanceEnd temp = list.get(i);
            UserAttendanceEnd temp2 = list.get(i-1);

            if(ChronoUnit.DAYS.between(temp.getEndTime(),temp2.getEndTime()) != 0 ){
                dateTimeDtos.add(new DateTimeDto(
                        temp2.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
                ));
            }

        }

        return dateTimeDtos;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    public User getUserById(String userId){
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다."));
    }

    public Organization getOrganizationById(String organizationId){
        return organizationRepository.findById(organizationId)
                .orElseThrow(() -> new IllegalArgumentException("등록된 기관이 아닙니다."));
    }
    public Membership getMembershipByUser(User user){
        return membershipRepository.findByUser(user)
                .orElseThrow(() -> new IllegalArgumentException("회원권이 없습니다."));
    }
    public Image getImageById(Long imageId){
        if(imageId == null) return null;
        return imageRepository.findById(imageId)
                .orElse(null);
    }

    public TimeLimitedMembership getTimeLimitedMembershipByMembership(Membership membership){
        return timeLimitedMembershipRepository.getTimeLimitedMembershipByMembership(membership)
                .orElseThrow(() -> new IllegalArgumentException("등록된 기간제 회원권이 없습니다."));
    }
    public CountBasedMembership getCountBasedMembershipByMembership(Membership membership){
        return countBasedMembershipRepository.getCountBasedMembershipRepositoryByMembership(membership)
                .orElseThrow(() -> new IllegalArgumentException("등록된 횟수제 회원권이 없습니다."));
    }
}
