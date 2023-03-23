package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.WorkerDto;
import com.ssafy.d102.data.dto.WorkerLoginDto;
import com.ssafy.d102.data.dto.WorkerRegistDto;
import com.ssafy.d102.data.dto.WorkerUpdatePwDto;
import com.ssafy.d102.data.entity.Worker;

import java.util.List;

public interface WorkerService {

    WorkerDto loginWorker(WorkerLoginDto input);

    List<WorkerDto> getAllWorker();

    WorkerDto getWorkerById(String id);

    void updateWorker(String id, WorkerRegistDto input);

    void updateWorkerPw(String id, WorkerUpdatePwDto input);

    void startWorker(String id);

    void endWorker(String id);

    void registWorker(WorkerRegistDto input);

    void deleteWorker(String id);
}
