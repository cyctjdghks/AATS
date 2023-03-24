package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.*;
import com.ssafy.d102.data.entity.Worker;
import com.ssafy.d102.service.WorkerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/worker")
@RequiredArgsConstructor
public class WorkerController {
    private final WorkerService workerService;


    @PostMapping("/login")
    public ResponseEntity<?> loginWorker(@RequestBody WorkerLoginDto input) {
        Map<String, Object> data = new HashMap<>();
        WorkerDto workerDto = workerService.loginWorker(input);

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
        WorkerDto workerDto = workerService.getWorkerById(id);

        data.put("msg", "success");
        data.put("data", workerDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateWorker(@RequestBody WorkerRegistDto input) {
        Map<String, Object> data = new HashMap<>();
        workerService.updateWorker(input);

        data.put("msg", "success");

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
    public ResponseEntity<?> registWorker(@RequestBody WorkerRegistDto input) {
        Map<String, Object> data = new HashMap<>();
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

    @GetMapping("get/end/{workerId}")
    public ResponseEntity<?> getWorkerEnd(@PathVariable("workerId") String id) {
        Map<String, Object> data = new HashMap<>();


        List<DateTimeDto> workerStartList = workerService.getWorkerStart(id);
        data.put("msg", "success");
        data.put("data", workerStartList);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }


}
