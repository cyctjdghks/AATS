package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.*;
import com.ssafy.d102.data.entity.Image;
import com.ssafy.d102.data.entity.Worker;
import com.ssafy.d102.service.ImageService;
import com.ssafy.d102.service.WorkerService;
import com.ssafy.d102.structure.jwt.JwtProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
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
        Map<String, Object> data = new HashMap<>();
        WorkerDto workerDto = workerService.loginWorker(input);

        String Key = jwtProvider.createToken(workerDto);

        Cookie cookie = new Cookie("Authorization", Key);
        cookie.setMaxAge(60*60);
        cookie.setPath("/");
        response.addCookie(cookie);

        data.put("msg", "success");
        data.put("data", workerDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllWorker() {
        Map<String, Object> data = new HashMap<>();
        List<WorkerDto> worker = workerService.getAllWorker();

        data.put("msg", "success");
        data.put("data", worker);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/get/{workerId}")
    public ResponseEntity<?> getWorker(@PathVariable("workerId") String id) {
        Map<String, Object> data = new HashMap<>();
        WorkerDto workerDto = workerService.getWorker(id);

        data.put("msg", "success");
        data.put("data", workerDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateWorker(@RequestPart(name = "profile", required = false) MultipartFile profile,
                                          @RequestPart(name = "worker") WorkerRegistDto input) {
        Map<String, Object> data = new HashMap<>();

        if (profile != null) {
            long id = 0l;
            id = imageService.addImage(Image.builder().build(), profile);
            input.setWorkerImageId(id);
        }

        workerService.updateWorker(input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/valid/{workerId}")
    public ResponseEntity<?> validWorkerId(@PathVariable String workerId) {
        Map<String, Object> data = new HashMap<>();
        WorkerValidIdDto workerValidIdDto = new WorkerValidIdDto(workerService.validWorkerId(workerId));

        data.put("msg", "success");
        data.put("data", workerValidIdDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/update/pw")
    public ResponseEntity<?> updateWorkerPw(@RequestBody WorkerUpdatePwDto input) {
        Map<String, Object> data = new HashMap<>();
        workerService.updateWorkerPw(input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("start/{workerId}")
    public ResponseEntity<?> startWorker(@PathVariable("workerId") String id) {
        Map<String, Object> data = new HashMap<>();
        workerService.startWorker(id);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("end/{workerId}")
    public ResponseEntity<?> endWorker(@PathVariable("workerId") String id) {
        Map<String, Object> data = new HashMap<>();
        workerService.endWorker(id);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/regist")
    public ResponseEntity<?> registWorker(@RequestPart(name = "profile", required = false) MultipartFile profile,
                                          @RequestPart(name = "worker") WorkerRegistDto input) {
        Map<String, Object> data = new HashMap<>();

        if (profile != null) {
            long id = 0l;
            id = imageService.addImage(Image.builder().build(), profile);
            input.setWorkerImageId(id);
        }

        workerService.registWorker(input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @DeleteMapping("delete/{workerId}")
    public ResponseEntity<?> deleteWorker(@PathVariable("workerId") String id) {
        Map<String, Object> data = new HashMap<>();
        workerService.deleteWorker(id);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("get/start/{workerId}")
    public ResponseEntity<?> getWorkerStart(@PathVariable("workerId") String id) {
        Map<String, Object> data = new HashMap<>();


        List<DateTimeDto> workerStartList = workerService.getWorkerStart(id);
        data.put("msg", "success");
        data.put("data", workerStartList);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("get/start/{workerId}/{month}")
    public ResponseEntity<?> getWorkerMonthStart(@PathVariable("workerId") String id, @PathVariable("month") String month) {
        Map<String, Object> data = new HashMap<>();


        List<DateTimeDto> workerMonthStartList = workerService.getWorkerMonthStart(id, month);
        data.put("msg", "success");
        data.put("data", workerMonthStartList);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("get/end/{workerId}")
    public ResponseEntity<?> getWorkerEnd(@PathVariable("workerId") String id) {
        Map<String, Object> data = new HashMap<>();


        List<DateTimeDto> workerEndList = workerService.getWorkerEnd(id);
        data.put("msg", "success");
        data.put("data", workerEndList);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("get/end/{workerId}/{month}")
    public ResponseEntity<?> getWorkerMonthEnd(@PathVariable("workerId") String id, @PathVariable("month") String month) {
        Map<String, Object> data = new HashMap<>();


        List<DateTimeDto> workerMonthEndList = workerService.getWorkerMonthEnd(id, month);
        data.put("msg", "success");
        data.put("data", workerMonthEndList);

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
