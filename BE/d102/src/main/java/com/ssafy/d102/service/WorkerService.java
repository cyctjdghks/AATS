package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.*;
import com.ssafy.d102.data.entity.Worker;

import java.util.List;

public interface WorkerService {

    WorkerDto loginWorker(WorkerLoginDto input);

    List<WorkerDto> getAllWorker();

    WorkerDto getWorkerById(String id);

    void updateWorker(WorkerRegistDto input);

    void updateWorkerPw(WorkerUpdatePwDto input);
    boolean validWorkerId(String workerId);

    void startWorker(String id);

    void endWorker(String id);

    void registWorker(WorkerRegistDto input);

    void deleteWorker(String id);

    List<DateTimeDto> getWorkerStart(String id);

    List<DateTimeDto> getWorkerEnd(String id);
}
