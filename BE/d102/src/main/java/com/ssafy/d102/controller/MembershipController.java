package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.*;
import com.ssafy.d102.service.MembershipService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/membership")
@Slf4j
@RequiredArgsConstructor
public class MembershipController {
    private final MembershipService membershipService;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping("/time/{userId}")
    public ResponseEntity<?> registTimeMembership(@PathVariable String userId, @RequestBody MembershipTimeDto input) {
        Map<String, Object> data = new HashMap<>();
        membershipService.registTimeMembership(userId, input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/count/{userId}")
    public ResponseEntity<?> registCountMembership(@PathVariable String userId, @RequestBody MembershipCountDto input) {
        Map<String, Object> data = new HashMap<>();
        membershipService.registCountMembership(userId, input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/time/{userId}")
    public ResponseEntity<?> getTimeMembership(@PathVariable String userId) {
        Map<String, Object> data = new HashMap<>();
        TimeMembershipDto timeMembershipDto = membershipService.getTimeMembership(userId);

        data.put("msg", "success");
        data.put("data", timeMembershipDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/count/{userId}")
    public ResponseEntity<?> getCountMembership(@PathVariable String userId) {
        Map<String, Object> data = new HashMap<>();
        CountMembershipDto countMembershipDto = membershipService.getCountMembership(userId);

        data.put("msg", "success");
        data.put("data", countMembershipDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }
}
