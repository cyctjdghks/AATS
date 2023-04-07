package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.request.cctvGetDto;
import com.ssafy.d102.data.dto.response.cctvDto;
import com.ssafy.d102.data.dto.request.cctvRegistDto;
import com.ssafy.d102.service.CCTVService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/cctv")
@RequiredArgsConstructor
public class CCTVController {
    private final CCTVService cctvService;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @PostMapping("/regist")
    public ResponseEntity<?> registCctv(@RequestBody cctvRegistDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        cctvService.registCctv(input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/get")
    public ResponseEntity<?> getCctv(@RequestBody cctvGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 cctvNo : {}", input);

        Map<String, Object> data = new HashMap<>();
        cctvDto cctvDto = cctvService.getCctv(input.getCctvNo());

        data.put("msg", "success");
        data.put("data", cctvDto);

        log.info("출력 데이터 : {}", data);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{cctvNo}")
    public ResponseEntity<?> deleteCctv(@PathVariable Long cctvNo) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 cctvNo : {}", cctvNo);

        Map<String, Object> data = new HashMap<>();
        cctvService.deleteCctv(cctvNo);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }
}
