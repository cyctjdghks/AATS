package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.cctvDto;
import com.ssafy.d102.data.dto.cctvRegistDto;
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
        Map<String, Object> data = new HashMap<>();
        cctvService.registCctv(input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/get/{cctvNo}")
    public ResponseEntity<?> getCctv(@PathVariable Long cctvNo) {
        Map<String, Object> data = new HashMap<>();
        cctvDto cctvDto = cctvService.getCctv(cctvNo);

        data.put("msg", "success");
        data.put("data", cctvDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{cctvNo}")
    public ResponseEntity<?> deleteCctv(@PathVariable Long cctvNo) {
        Map<String, Object> data = new HashMap<>();
        cctvService.deleteCctv(cctvNo);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }
}
