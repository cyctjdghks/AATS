package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.request.*;
import com.ssafy.d102.data.dto.response.DateTimeDto;
import com.ssafy.d102.data.dto.response.WorkerDto;
import com.ssafy.d102.data.dto.response.WorkerValidIdDto;
import com.ssafy.d102.data.entity.Image;
import com.ssafy.d102.service.ImageService;
import com.ssafy.d102.service.WorkerService;
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
@RequestMapping("/worker")
@RequiredArgsConstructor
public class WorkerController {
    private final WorkerService workerService;
    private final ImageService imageService;
    private final JwtProvider jwtProvider;


    @PostMapping("/login")
    public ResponseEntity<?> loginWorker(@RequestBody WorkerLoginDto input, HttpServletResponse response) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        WorkerDto workerDto = workerService.loginWorker(input);

        String Key = jwtProvider.createToken(workerDto);

        Cookie cookie = new Cookie("Authorization", Key);
        cookie.setMaxAge(60*60);
        cookie.setPath("/");
        response.addCookie(cookie);

        data.put("msg", "success");
        data.put("data", workerDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllWorker() {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        Map<String, Object> data = new HashMap<>();
        List<WorkerDto> worker = workerService.getAllWorker();

        data.put("msg", "success");
        data.put("data", worker);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/get")
    public ResponseEntity<?> getWorker(@RequestBody WorkerGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 workerId : {}", input.getWorkerId());

        Map<String, Object> data = new HashMap<>();
        WorkerDto workerDto = workerService.getWorker(input.getWorkerId());

        data.put("msg", "success");
        data.put("data", workerDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateWorker(@RequestPart(name = "profile", required = false) MultipartFile profile,
                                          @RequestPart(name = "worker") WorkerRegistDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();

        if (profile != null) {
            long id = 0l;
            id = imageService.addImage(Image.builder().build(), profile);
            input.setWorkerImageId(id);
        }

        workerService.updateWorker(input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/valid/{workerId}")
    public ResponseEntity<?> validWorkerId(@PathVariable String workerId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 workerId : {}", workerId);

        Map<String, Object> data = new HashMap<>();
        WorkerValidIdDto workerValidIdDto = new WorkerValidIdDto(workerService.validWorkerId(workerId));

        data.put("msg", "success");
        data.put("data", workerValidIdDto);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/update/pw")
    public ResponseEntity<?> updateWorkerPw(@RequestBody WorkerUpdatePwDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();
        workerService.updateWorkerPw(input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("start/{workerId}")
    public ResponseEntity<?> startWorker(@PathVariable("workerId") String workerId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 workerId : {}", workerId);

        Map<String, Object> data = new HashMap<>();
        workerService.startWorker(workerId);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("end/{workerId}")
    public ResponseEntity<?> endWorker(@PathVariable("workerId") String workerId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 workerId : {}", workerId);

        Map<String, Object> data = new HashMap<>();
        workerService.endWorker(workerId);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/regist")
    public ResponseEntity<?> registWorker(@RequestPart(name = "profile", required = false) MultipartFile profile,
                                          @RequestPart(name = "worker") WorkerRegistDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input);

        Map<String, Object> data = new HashMap<>();

        if (profile != null) {
            long id = 0l;
            id = imageService.addImage(Image.builder().build(), profile);
            input.setWorkerImageId(id);
        }

        workerService.registWorker(input);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @DeleteMapping("delete/{workerId}")
    public ResponseEntity<?> deleteWorker(@PathVariable("workerId") String workerId) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 workerId : {}", workerId);

        Map<String, Object> data = new HashMap<>();
        workerService.deleteWorker(workerId);

        data.put("msg", "success");

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("get/start")
    public ResponseEntity<?> getWorkerStart(@RequestBody WorkerGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 workerId : {}", input.getWorkerId());

        Map<String, Object> data = new HashMap<>();

        List<DateTimeDto> workerStartList = workerService.getWorkerStart(input.getWorkerId());
        data.put("msg", "success");
        data.put("data", workerStartList);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("get/start/month")
    public ResponseEntity<?> getWorkerMonthStart(@RequestBody WorkerGetMonthDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 input : {}", input.getWorkerId());
        log.info("입력 데이터 month : {}", input.getMonth());

        Map<String, Object> data = new HashMap<>();

        List<DateTimeDto> workerMonthStartList = workerService.getWorkerMonthStart(input.getWorkerId(), input.getMonth());
        data.put("msg", "success");
        data.put("data", workerMonthStartList);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("get/end")
    public ResponseEntity<?> getWorkerEnd(@RequestBody WorkerGetDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 workerId : {}", input.getWorkerId());

        Map<String, Object> data = new HashMap<>();

        List<DateTimeDto> workerEndList = workerService.getWorkerEnd(input.getWorkerId());
        data.put("msg", "success");
        data.put("data", workerEndList);

        log.info("출력 데이터 : {}", data);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("get/end/month")
    public ResponseEntity<?> getWorkerMonthEnd(@RequestBody WorkerGetMonthDto input) {
        log.info("{} 메소드 호출", Thread.currentThread().getStackTrace()[1].getMethodName());
        log.info("입력 데이터 workerId : {}", input.getWorkerId());

        Map<String, Object> data = new HashMap<>();

        List<DateTimeDto> workerMonthEndList = workerService.getWorkerMonthEnd(input.getWorkerId(), input.getMonth());
        data.put("msg", "success");
        data.put("data", workerMonthEndList);

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
