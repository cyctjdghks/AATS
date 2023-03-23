package com.ssafy.d102.controller;

import com.ssafy.d102.data.dto.WorkerDto;
import com.ssafy.d102.data.dto.WorkerLoginDto;
import com.ssafy.d102.data.dto.WorkerRegistDto;
import com.ssafy.d102.data.dto.WorkerUpdatePwDto;
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
//@RequiredArgsConstructor
public class WorkerController {
    private final WorkerService workerService;

    @Autowired
    public WorkerController(WorkerService workerService) {
        this.workerService = workerService;
    }

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

    @PutMapping("update/{workerId}")
    public ResponseEntity<?> updateWorker(@PathVariable("workerId") String id, @RequestBody WorkerRegistDto input) {
        Map<String, Object> data = new HashMap<>();
        workerService.updateWorker(id, input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("update/pw/{workerId}")
    public ResponseEntity<?> updateWorkerPw(@PathVariable("workerId") String id, @RequestBody WorkerUpdatePwDto input) {
        Map<String, Object> data = new HashMap<>();
        workerService.updateWorkerPw(id, input);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("start/{workerId}")
    public ResponseEntity<?> startWorker(@PathVariable("workerId") String id) {
        Map<String, Object> data = new HashMap<>();
        workerService.startWorker(id);

        data.put("msg", "success");

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("end/{workerId}")
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

}
