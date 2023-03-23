package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.dto.CountMembershipDto;
import com.ssafy.d102.data.dto.MembershipTimeDto;
import com.ssafy.d102.data.dto.TimeMembershipDto;
import com.ssafy.d102.repository.MembershipRepository;
import com.ssafy.d102.service.MembershipService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MembershipServiceImpl implements MembershipService {
    private final MembershipRepository membershipRepository;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registTimeMembership(String userId, MembershipTimeDto input) {

    }

    @Override
    public void registCountMembership(String userId, MembershipTimeDto input) {

    }

    @Override
    public TimeMembershipDto getTimeMembership(String userId) {
        return null;
    }

    @Override
    public CountMembershipDto getCountMembership(String userId) {
        return null;
    }


}
