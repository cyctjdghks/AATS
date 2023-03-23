package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.CountMembershipDto;
import com.ssafy.d102.data.dto.MembershipCountDto;
import com.ssafy.d102.data.dto.MembershipTimeDto;
import com.ssafy.d102.data.dto.TimeMembershipDto;

public interface MembershipService {
    void registTimeMembership(String userId, MembershipTimeDto input);
    void registCountMembership(String userId, MembershipCountDto input);
    TimeMembershipDto getTimeMembership(String userId);
    CountMembershipDto getCountMembership(String userId);
}
