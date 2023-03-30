package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.dto.request.MembershipCountGetDto;
import com.ssafy.d102.data.dto.request.MembershipTimeGetDto;
import com.ssafy.d102.data.dto.response.CountMembershipDto;
import com.ssafy.d102.data.dto.response.MembershipCountDto;
import com.ssafy.d102.data.dto.response.MembershipTimeDto;
import com.ssafy.d102.data.dto.response.TimeMembershipDto;
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
    public void registTimeMembership(String userId, MembershipTimeGetDto input) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("유저 아이디가 없습니다"));

        Membership membership = null;

        if (user.getMembership() != null) {
            int userType = user.getMembership().getMembershipType();

            membership = membershipRepository.findByUser(user)
                    .orElseThrow(() -> new IllegalArgumentException("멤버십이 없습니다."));

            if (userType == 0) {
                TimeLimitedMembership timeLimitedMembership = timeLimitedMembershipRepository.getTimeLimitedMembershipByMembership(membership)
                        .orElseThrow(() -> new IllegalArgumentException("기간제 멤버십이 없습니다."));

                // 포맷터
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");

                timeLimitedMembership.setEndTime(LocalDateTime.parse(input.getEndTime(), formatter));
            } else {
                CountBasedMembership countBasedMembership = countBasedMembershipRepository.getCountBasedMembershipRepositoryByMembership(membership)
                        .orElseThrow(() -> new IllegalArgumentException("횟수제 멤버십이 없습니다."));

                countBasedMembershipRepository.delete(countBasedMembership);

                membership.setMembershipType(0);

                TimeLimitedMembership timeLimitedMembership = new TimeLimitedMembership();

                // 포맷터
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");

                timeLimitedMembership.setStartTime(LocalDateTime.parse(input.getStartTime(), formatter));
                timeLimitedMembership.setEndTime(LocalDateTime.parse(input.getEndTime(), formatter));
                timeLimitedMembership.setMembership(membership);

                timeLimitedMembershipRepository.save(timeLimitedMembership);
                membership.setTimeLimitedMembership(timeLimitedMembership);
                membership.setCountBasedMembership(null);
            }

        } else {
            membership = membershipRepository.save(Membership.builder()
                    .membershipType(0)
                    .user(user)
                    .build());

            TimeLimitedMembership timeLimitedMembership = new TimeLimitedMembership();

            // 포맷터
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");

            timeLimitedMembership.setStartTime(LocalDateTime.parse(input.getStartTime(), formatter));
            timeLimitedMembership.setEndTime(LocalDateTime.parse(input.getEndTime(), formatter));
            timeLimitedMembership.setMembership(membership);

            timeLimitedMembershipRepository.save(timeLimitedMembership);
        }


    }

    @Override
    @Transactional
    public void registCountMembership(String userId, MembershipCountGetDto input) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("유저 아이디가 없습니다"));

        Membership membership = null;

        if (user.getMembership() != null) {
            int userType = user.getMembership().getMembershipType();

            membership = membershipRepository.findByUser(user)
                    .orElseThrow(() -> new IllegalArgumentException("멤버십이 없습니다."));

            if (userType == 1) {
                CountBasedMembership countBasedMembership = countBasedMembershipRepository.getCountBasedMembershipRepositoryByMembership(membership)
                        .orElseThrow(() -> new IllegalArgumentException("횟수제 멤버십이 없습니다."));

                int total = countBasedMembership.getCount() + input.getCount();

                countBasedMembership.setCount(total);
            } else {
                TimeLimitedMembership timeLimitedMembership = timeLimitedMembershipRepository.getTimeLimitedMembershipByMembership(membership)
                        .orElseThrow(() -> new IllegalArgumentException("기간제 멤버십이 없습니다."));

                timeLimitedMembershipRepository.delete(timeLimitedMembership);

                membership.setMembershipType(1);

                CountBasedMembership countBasedMembership = CountBasedMembership.builder()
                        .count(input.getCount())
                        .membership(membership)
                        .build();

                countBasedMembershipRepository.save(countBasedMembership);
                membership.setTimeLimitedMembership(null);
                membership.setCountBasedMembership(countBasedMembership);
            }
        } else {
            membership = membershipRepository.save(Membership.builder()
                    .membershipType(1)
                    .user(user)
                    .build());

            CountBasedMembership countBasedMembership = CountBasedMembership.builder()
                    .count(input.getCount())
                    .membership(membership)
                    .build();

            countBasedMembershipRepository.save(countBasedMembership);
        }
    }

    @Override
    public TimeMembershipDto getTimeMembership(String userId) {
        TimeMembershipDto timeMembershipDto = new TimeMembershipDto();

        //TODO : JPQL 써서 join으로 해결해보기
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));
        Membership membership = membershipRepository.findByUser(user)
                .orElseThrow(() -> new IllegalArgumentException("회원권이 없습니다."));
        TimeLimitedMembership timeLimitedMembership = timeLimitedMembershipRepository.getTimeLimitedMembershipByMembership(membership)
                .orElseThrow(() -> new IllegalArgumentException("등록된 기간제 회원권이 없습니다."));

        timeMembershipDto.setMembershipNo(timeLimitedMembership.getType1No());
        timeMembershipDto.setStartTime(timeLimitedMembership.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")));
        timeMembershipDto.setEndTime(timeLimitedMembership.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")));

        return timeMembershipDto;
    }

    @Override
    public CountMembershipDto getCountMembership(String userId) {
        CountMembershipDto countMembershipDto = new CountMembershipDto();

        //TODO: JPQL
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("아이디가 없습니다"));
        Membership membership = membershipRepository.findByUser(user)
                .orElseThrow(() -> new IllegalArgumentException("등록된멤버십이 없습니다."));
        CountBasedMembership countBasedMembership = countBasedMembershipRepository.getCountBasedMembershipRepositoryByMembership(membership)
                .orElseThrow(() -> new IllegalArgumentException("등록된 횟수제 회원권이 없습니다."));

        countMembershipDto.setMembershipNo(countBasedMembership.getType2No());
        countMembershipDto.setCount(countBasedMembership.getCount());

        return countMembershipDto;
    }


}
