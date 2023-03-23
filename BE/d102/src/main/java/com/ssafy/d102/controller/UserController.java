package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.*;
import com.ssafy.d102.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping("/regist")
    public ResponseEntity<?> registUser(@RequestBody UserRegistDto input) {
        Map<String, Object> data = new HashMap<>();
        userService.registUser(input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDto input) {
        Map<String, Object> data = new HashMap<>();
        UserDto user = userService.loginUser(input);

        data.put("msg", "success");
        data.put("data", user);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PutMapping("/update/{userId}")
    public ResponseEntity<?> updateUser(@PathVariable String userId, @RequestBody UserRegistDto input) {
        Map<String, Object> data = new HashMap<>();
        userService.updateUser(userId, input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable String userId) {
        Map<String, Object> data = new HashMap<>();
        userService.deleteUser(userId);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    //TODO
    @GetMapping("/valid/{userId}")
    public ResponseEntity<?> validUserId(@PathVariable String userId) {
        Map<String, Object> data = new HashMap<>();
        UserValidIdDto userValidIdDto = new UserValidIdDto(userService.validUserId(userId));

        data.put("msg", "success");
        data.put("data", userValidIdDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PutMapping("/update/pw/{userId}")
    public ResponseEntity<?> updateUserPw(@PathVariable String userId, @RequestBody UserUpdatePwDto input) {
        Map<String, Object> data = new HashMap<>();
        userService.updateUserPw(userId, input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllUser() {
        Map<String, Object> data = new HashMap<>();
        List<UserDto> list =  userService.getAllUser();

        data.put("msg", "success");
        data.put("data", list);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/get/{userId}")
    public ResponseEntity<?> getUser(@PathVariable String userId) {
        Map<String, Object> data = new HashMap<>();
        UserDto userDto = userService.getUser(userId);

        data.put("msg", "success");
        data.put("data", userDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/start/{userId}")
    public ResponseEntity<?> startUser(@PathVariable String userId) {
        Map<String, Object> data = new HashMap<>();
        userService.startUser(userId);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/end/{userId}")
    public ResponseEntity<?> endUser(@PathVariable String userId) {
        Map<String, Object> data = new HashMap<>();
        userService.endUser(userId);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/membership/{userId}")
    public ResponseEntity<?> getUserMembership(@PathVariable String userId) {
        Map<String, Object> data = new HashMap<>();
        MembershipDto membershipDto = userService.getUserMembership(userId);

        data.put("msg", "success");
        data.put("data", membershipDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/membership/time/{userId}")
    public ResponseEntity<?> getUserMembershipTime(@PathVariable String userId) {
        Map<String, Object> data = new HashMap<>();
        MembershipTimeDto membershipTimeDto = userService.getUserMembershipTime(userId);

        data.put("msg", "success");
        data.put("data", membershipTimeDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/membership/count/{userId}")
    public ResponseEntity<?> getUserMembershipCount(@PathVariable String userId) {
        Map<String, Object> data = new HashMap<>();
        MembershipCountDto membershipCountDto = userService.getUserMembershipCount(userId);

        data.put("msg", "success");
        data.put("data", membershipCountDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/count/all")
    public ResponseEntity<?> countUserAll() {
        Map<String, Object> data = new HashMap<>();
        CountUserDto countUserDto = userService.countUserAll();

        data.put("msg", "success");
        data.put("data", countUserDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/use/time")
    public ResponseEntity<?> countUserUseTime() {
        Map<String, Object> data = new HashMap<>();
        CountUserDto countUserDto = userService.countUserUseTime();

        data.put("msg", "success");
        data.put("data", countUserDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/use/count")
    public ResponseEntity<?> countUserUseCount() {
        Map<String, Object> data = new HashMap<>();
        CountUserDto countUserDto = userService.countUserUseCount();

        data.put("msg", "success");
        data.put("data", countUserDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }
}

