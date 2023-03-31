package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.response.MembershipCountDto;
import com.ssafy.d102.data.dto.response.MembershipTimeDto;
import com.ssafy.d102.data.dto.request.*;
import com.ssafy.d102.data.dto.response.*;
import com.ssafy.d102.data.entity.Image;
import com.ssafy.d102.service.ImageService;
import com.ssafy.d102.service.UserService;
import com.ssafy.d102.structure.jwt.JwtProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final ImageService imageService;
    private final JwtProvider jwtProvider;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping("/regist")
    public ResponseEntity<?> registUser(@RequestPart(name = "profile", required = false) MultipartFile profile,
                                        @RequestPart(name = "user") UserRegistDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();

        if (profile != null) {
            long id = 0l;
            id = imageService.addImage(Image.builder().build(), profile);
            input.setUserImageId(id);
        }

        userService.registUser(input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDto input, HttpServletResponse response) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        UserDto userDto = userService.loginUser(input);

        String Key = jwtProvider.createToken(userDto);

        Cookie cookie = new Cookie("Authorization", Key);
        cookie.setMaxAge(60*60);
        cookie.setPath("/");
        response.addCookie(cookie);

        data.put("msg", "success");
        data.put("data", userDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestPart(name = "profile", required = false) MultipartFile profile,
                                        @RequestPart(name = "user") UserRegistDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();

        if (profile != null) {
            long id = 0l;
            id = imageService.addImage(Image.builder().build(), profile);
            input.setUserImageId(id);
        }

        userService.updateUser(input);

        log.info("출력 데이터 : {}", data);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable String userId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", userId);

        Map<String, Object> data = new HashMap<>();
        userService.deleteUser(userId);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/valid/{userId}")
    public ResponseEntity<?> validUserId(@PathVariable String userId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", userId);

        Map<String, Object> data = new HashMap<>();
        UserValidIdDto userValidIdDto = new UserValidIdDto(userService.validUserId(userId));

        data.put("msg", "success");
        data.put("data", userValidIdDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PutMapping("/update/pw")
    public ResponseEntity<?> updateUserPw(@RequestBody UserUpdatePwDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        userService.updateUserPw(input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllUser() {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());

        Map<String, Object> data = new HashMap<>();
        List<UserDto> list =  userService.getAllUser();

        data.put("msg", "success");
        data.put("data", list);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/get")
    public ResponseEntity<?> getUser(@RequestBody UserGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", input);

        Map<String, Object> data = new HashMap<>();
        UserDto userDto = userService.getUser(input.getUserId());

        data.put("msg", "success");
        data.put("data", userDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/start/{userId}")
    public ResponseEntity<?> startUser(@PathVariable String userId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", userId);

        Map<String, Object> data = new HashMap<>();
        userService.startUser(userId);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/end/{userId}")
    public ResponseEntity<?> endUser(@PathVariable String userId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", userId);

        Map<String, Object> data = new HashMap<>();
        userService.endUser(userId);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/membership")
    public ResponseEntity<?> getUserMembership(@RequestBody UserGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", input);

        Map<String, Object> data = new HashMap<>();
        MembershipDto membershipDto = userService.getUserMembership(input.getUserId());

        data.put("msg", "success");
        data.put("data", membershipDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/membership/time")
    public ResponseEntity<?> getUserMembershipTime(@RequestBody UserGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", input);

        Map<String, Object> data = new HashMap<>();
        MembershipTimeDto membershipTimeDto = userService.getUserMembershipTime(input.getUserId());

        data.put("msg", "success");
        data.put("data", membershipTimeDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/membership/count")
    public ResponseEntity<?> getUserMembershipCount(@PathVariable UserGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", input);

        Map<String, Object> data = new HashMap<>();
        MembershipCountDto membershipCountDto = userService.getUserMembershipCount(input.getUserId());

        data.put("msg", "success");
        data.put("data", membershipCountDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/count/all")
    public ResponseEntity<?> countUserAll() {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());

        Map<String, Object> data = new HashMap<>();
        CountUserDto countUserDto = userService.countUserAll();

        data.put("msg", "success");
        data.put("data", countUserDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/use/time")
    public ResponseEntity<?> countUserUseTime() {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());

        Map<String, Object> data = new HashMap<>();
        CountUserDto countUserDto = userService.countUserUseTime();

        data.put("msg", "success");
        data.put("data", countUserDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/use/count")
    public ResponseEntity<?> countUserUseCount() {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());

        Map<String, Object> data = new HashMap<>();
        CountUserDto countUserDto = userService.countUserUseCount();

        data.put("msg", "success");
        data.put("data", countUserDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/get/start")
    public ResponseEntity<?> getUserStart(@RequestBody UserGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 userId : {}", input);

        Map<String, Object> data = new HashMap<>();
        List<DateTimeDto> list =  userService.getUserStart(input.getUserId());

        data.put("msg", "success");
        data.put("data", list);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/get/start/month")
    public ResponseEntity<?> getUserMonthStart(@RequestBody UserGetMonthDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        List<DateTimeDto> list =  userService.getUserMonthStart(input);

        data.put("msg", "success");
        data.put("data", list);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/get/end")
    public ResponseEntity<?> getUserEnd(@RequestBody UserGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        List<DateTimeDto> list =  userService.getUserEnd(input.getUserId());

        data.put("msg", "success");
        data.put("data", list);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/get/end/month")
    public ResponseEntity<?> getUserMonthEnd(@RequestBody UserGetMonthDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        List<DateTimeDto> list =  userService.getUserMonthEnd(input);

        data.put("msg", "success");
        data.put("data", list);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }
    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());

        String logoutMSG = "logout";
        Map<String, Object> data = new HashMap<>();

        Cookie cookie = new Cookie("Authorization", logoutMSG);
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK );
    }
}

