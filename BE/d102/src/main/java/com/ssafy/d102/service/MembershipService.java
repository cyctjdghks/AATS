package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.request.MembershipCountGetDto;
import com.ssafy.d102.data.dto.request.MembershipTimeGetDto;
import com.ssafy.d102.data.dto.response.CountMembershipDto;
import com.ssafy.d102.data.dto.response.MembershipCountDto;
import com.ssafy.d102.data.dto.response.MembershipTimeDto;
import com.ssafy.d102.data.dto.response.TimeMembershipDto;

public interface MembershipService {
    void registTimeMembership(String userId, MembershipTimeGetDto input);
    void registCountMembership(String userId, MembershipCountGetDto input);
    TimeMembershipDto getTimeMembership(String userId);
    CountMembershipDto getCountMembership(String userId);
}
