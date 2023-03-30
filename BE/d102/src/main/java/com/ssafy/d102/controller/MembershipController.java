package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.MembershipCountDto;
import com.ssafy.d102.data.dto.MembershipTimeDto;
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

    @PostMapping("/time/{userId}")
    public ResponseEntity<?> registTimeMembership(@PathVariable String userId, @RequestBody MembershipTimeDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", userId);
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        membershipService.registTimeMembership(userId, input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/count/{userId}")
    public ResponseEntity<?> registCountMembership(@PathVariable String userId, @RequestBody MembershipCountDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", userId);
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        membershipService.registCountMembership(userId, input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/time/{userId}")
    public ResponseEntity<?> getTimeMembership(@PathVariable String userId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", userId);

        Map<String, Object> data = new HashMap<>();
        TimeMembershipDto timeMembershipDto = membershipService.getTimeMembership(userId);

        data.put("msg", "success");
        data.put("data", timeMembershipDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/count/{userId}")
    public ResponseEntity<?> getCountMembership(@PathVariable String userId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", userId);

        Map<String, Object> data = new HashMap<>();
        CountMembershipDto countMembershipDto = membershipService.getCountMembership(userId);

        data.put("msg", "success");
        data.put("data", countMembershipDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }
}
