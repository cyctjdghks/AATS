package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.request.WorkerLoginDto;
import com.ssafy.d102.data.dto.request.WorkerRegistDto;
import com.ssafy.d102.data.dto.request.WorkerUpdatePwDto;
import com.ssafy.d102.data.dto.response.DateTimeDto;
import com.ssafy.d102.data.dto.response.WorkerDto;

import java.util.List;

public interface WorkerService {

    WorkerDto loginWorker(WorkerLoginDto input);

    List<WorkerDto> getAllWorker();

    WorkerDto getWorker(String id);

    void updateWorker(WorkerRegistDto input);

    void updateWorkerPw(WorkerUpdatePwDto input);
    boolean validWorkerId(String workerId);

    void startWorker(String id);

    void endWorker(String id);

    void registWorker(WorkerRegistDto input);

    void deleteWorker(String id);

    List<DateTimeDto> getWorkerStart(String id);

    List<DateTimeDto> getWorkerMonthStart(String id, String month);

    List<DateTimeDto> getWorkerEnd(String id);

    List<DateTimeDto> getWorkerMonthEnd(String id, String month);
}
