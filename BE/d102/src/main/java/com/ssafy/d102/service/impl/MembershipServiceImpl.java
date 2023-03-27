package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.dto.CountMembershipDto;
import com.ssafy.d102.data.dto.MembershipCountDto;
import com.ssafy.d102.data.dto.MembershipTimeDto;
import com.ssafy.d102.data.dto.TimeMembershipDto;
import com.ssafy.d102.data.entity.CountBasedMembership;
import com.ssafy.d102.data.entity.Membership;
import com.ssafy.d102.data.entity.TimeLimitedMembership;
import com.ssafy.d102.data.entity.User;
import com.ssafy.d102.repository.CountBasedMembershipRepository;
import com.ssafy.d102.repository.MembershipRepository;
import com.ssafy.d102.repository.TimeLimitedMembershipRepository;
import com.ssafy.d102.repository.UserRepository;
import com.ssafy.d102.service.MembershipService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MembershipServiceImpl implements MembershipService {
    private final MembershipRepository membershipRepository;
    private final TimeLimitedMembershipRepository timeLimitedMembershipRepository;
    private final CountBasedMembershipRepository countBasedMembershipRepository;
    private final UserRepository userRepository;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    @Transactional
    public void registTimeMembership(String userId, MembershipTimeDto input) {
        Membership membership = membershipRepository.save(Membership.builder()
                .membershipType(0)
                .user(userRepository.findById(userId).get())
                .build());

        TimeLimitedMembership timeLimitedMembership = new TimeLimitedMembership();

        // 포맷터
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");

        timeLimitedMembership.setStartTime(LocalDateTime.parse(input.getStartTime(), formatter));
        timeLimitedMembership.setEndTime(LocalDateTime.parse(input.getEndTime(), formatter));
        timeLimitedMembership.setMembership(membership);

        timeLimitedMembershipRepository.save(timeLimitedMembership);
    }

    @Override
    @Transactional
    public void registCountMembership(String userId, MembershipCountDto input) {
        Membership membership = membershipRepository.save(Membership.builder()
                .membershipType(1)
                .user(userRepository.findById(userId).get())
                .build());

        CountBasedMembership countBasedMembership = CountBasedMembership.builder()
                .count(input.getCount())
                .membership(membership)
                .build();

        countBasedMembershipRepository.save(countBasedMembership);
    }

    @Override
    public TimeMembershipDto getTimeMembership(String userId) {
        TimeMembershipDto timeMembershipDto = new TimeMembershipDto();

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        Membership membership = membershipRepository.findByUser(user);

        TimeLimitedMembership timeLimitedMembership = timeLimitedMembershipRepository.findByMembership(membership)
                .orElseThrow(() -> new IllegalArgumentException("등록된 기간제 회원권이 없습니다."));

        timeMembershipDto.setMembershipNo(timeLimitedMembership.getType1No());
        timeMembershipDto.setStartTime(timeLimitedMembership.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")));
        timeMembershipDto.setEndTime(timeLimitedMembership.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")));

        return timeMembershipDto;
    }

    @Override
    public CountMembershipDto getCountMembership(String userId) {
        CountMembershipDto countMembershipDto = new CountMembershipDto();

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));

        Membership membership = membershipRepository.findByUser(user);


        CountBasedMembership countBasedMembership = countBasedMembershipRepository.findByMembership(membership)
                .orElseThrow(() -> new IllegalArgumentException("등록된 횟수제 회원권이 없습니다."));

        countMembershipDto.setMembershipNo(countBasedMembership.getType2No());
        countMembershipDto.setCount(countBasedMembership.getCount());

        return countMembershipDto;
    }


}
