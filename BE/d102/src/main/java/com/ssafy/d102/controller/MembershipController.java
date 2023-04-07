package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.request.MembershipCountGetDto;
import com.ssafy.d102.data.dto.request.MembershipTimeGetDto;
import com.ssafy.d102.data.dto.response.MembershipCountDto;
import com.ssafy.d102.data.dto.response.MembershipTimeDto;
import com.ssafy.d102.data.dto.request.UserGetDto;
import com.ssafy.d102.data.dto.response.CountMembershipDto;
import com.ssafy.d102.data.dto.response.TimeMembershipDto;
import com.ssafy.d102.service.MembershipService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/membership")
@RequiredArgsConstructor
public class MembershipController {
    private final MembershipService membershipService;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping("/time")
    public ResponseEntity<?> registTimeMembership(@RequestBody MembershipTimeGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", input.getUserId());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        membershipService.registTimeMembership(input.getUserId(), input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/count")
    public ResponseEntity<?> registCountMembership(@RequestBody MembershipCountGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", input.getUserId());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        membershipService.registCountMembership(input.getUserId(), input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/time/get")
    public ResponseEntity<?> getTimeMembership(@RequestBody UserGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        TimeMembershipDto timeMembershipDto = membershipService.getTimeMembership(input.getUserId());

        data.put("msg", "success");
        data.put("data", timeMembershipDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/count/get")
    public ResponseEntity<?> getCountMembership(@RequestBody UserGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        CountMembershipDto countMembershipDto = membershipService.getCountMembership(input.getUserId());

        data.put("msg", "success");
        data.put("data", countMembershipDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }
}
