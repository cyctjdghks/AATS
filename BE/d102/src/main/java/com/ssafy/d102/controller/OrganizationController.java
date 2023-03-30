package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.request.OrganizationLoginDto;
import com.ssafy.d102.data.dto.request.OrganizationUpdatePwDto;
import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.response.OrganizationValidIdDto;
import com.ssafy.d102.data.dto.response.UserDto;
import com.ssafy.d102.data.dto.response.WorkerDto;
import com.ssafy.d102.service.OrganizationService;
import com.ssafy.d102.structure.jwt.JwtProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/organization")
@RequiredArgsConstructor
public class OrganizationController {

    private final OrganizationService service;
    private final JwtProvider jwtProvider;

    @PostMapping("/login")
    public ResponseEntity<?> loginOrganization(@RequestBody OrganizationLoginDto input, HttpServletResponse response) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        OrganizationDto organizationDto = service.loginOrganization(input);

        String Key = jwtProvider.createToken(organizationDto);

        data.put("msg", "success");
        data.put("data", organizationDto);

        Cookie cookie = new Cookie("Authorization", Key);
        cookie.setMaxAge(60*60);
        cookie.setPath("/");
        response.addCookie(cookie);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/regist")
    public ResponseEntity<?> registOrganization(@RequestBody OrganizationDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        service.registOrganization(input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAllOrganization(){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());

        Map<String, Object> data = new HashMap<>();
        List<OrganizationDto> list = service.getAllOrganization();

        data.put("msg", "success");
        data.put("data", list);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/getall/user")
    public ResponseEntity<?> getAllUserByOrganization(@RequestBody Map<String,String> input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        String organizationId = input.get("organizationId");

        log.info("sdasdasdasdasdasdasdasdasdas" + organizationId);

        Map<String, Object> data = new HashMap<>();

        List<UserDto> list = service.getAllUserByOrganization(organizationId);

        data.put("msg", "success");
        data.put("data", list);

        log.info("출력 데이터 : {}", data);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/getall/worker")
    public ResponseEntity<?> getAllWorkerByOrganization(@RequestBody Map<String,String> input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        String organizationId = input.get("organizationId");

        Map<String, Object> data = new HashMap<>();

        List<WorkerDto> list = service.getAllWorkerByOrganization(organizationId);

        data.put("msg", "success");
        data.put("data", list);

        log.info("출력 데이터 : {}", data);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/getone/{organizationId}")
    public ResponseEntity<?> getOrganization (@PathVariable String organizationId){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());

        Map<String, Object> data = new HashMap<>();
        OrganizationDto organizationDto = service.getOrganization(organizationId);

        data.put("msg", "success");
        data.put("data", organizationDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateOrganization(@RequestBody OrganizationDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();

        OrganizationDto dto = service.updateOrganization(input);

        data.put("msg", "success");
        data.put("data", dto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @GetMapping("/valid/{organizationId}")
    public ResponseEntity<?> validOrganizationId(@PathVariable String organizationId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 organizationId : {}", organizationId);

        Map<String, Object> data = new HashMap<>();
        OrganizationValidIdDto organizationValidIdDto = new OrganizationValidIdDto(service.validOrganizationId(organizationId));

        data.put("msg", "success");
        data.put("data", organizationValidIdDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PutMapping("/changepw")
    public ResponseEntity<?> changePw(@RequestBody OrganizationUpdatePwDto input){
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();

        service.changePw(input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response){
        String logoutMSG = "logout";
        Map<String, Object> data = new HashMap<>();

        Cookie cookie = new Cookie("Authorization", logoutMSG);
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK );
    }


}
