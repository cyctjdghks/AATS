package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.Exception.NoContentException;
import com.ssafy.d102.data.Exception.NotMatchException;
import com.ssafy.d102.data.dto.*;
import com.ssafy.d102.data.entity.*;
import com.ssafy.d102.repository.OrganizationRepository;
import com.ssafy.d102.repository.WorkerAttendanceEndRepository;
import com.ssafy.d102.repository.WorkerAttendanceStartRepository;
import com.ssafy.d102.repository.WorkerRepository;
import com.ssafy.d102.service.WorkerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class WorkerServiceImpl implements WorkerService {

    private final WorkerRepository workerRepository;
    private final PasswordEncoder passwordEncoder;
    private final OrganizationRepository organizationRepository;
    private final WorkerAttendanceStartRepository workerAttendanceStartRepository;
    private final WorkerAttendanceEndRepository workerAttendanceEndRepository;

    @Override
    public WorkerDto loginWorker(WorkerLoginDto input) {
        String id = input.getWorkerId();

        Worker worker = workerRepository.findById(id)
                .orElseThrow(() -> new NoContentException("Id를 확인해주세요."));

        if(!passwordEncoder.matches(input.getWorkerPwd(), worker.getWorkerPw())) {
            throw new NotMatchException("PW가 다릅니다.");
        }

        WorkerDto workerDto = WorkerDto.builder()
                .workerId(worker.getWorkerId())
                .workerName(worker.getWorkerName())
                .workerStatus(worker.getWorkerStatus())
                .workerOrganizationId(worker.getOrganization().getOrganizationId())
                .workerGender(worker.getWorkerGender())
                .workerAge(worker.getWorkerAge())
                .workerPhone(worker.getWorkerPhone())
                .workerEmail(worker.getWorkerEmail())
                .workerBirth(worker.getWorkerBirth())
                .workerNationality(worker.getWorkerNationality())
                .workerProfile(null)
                .workerRegistDate(worker.getCreated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .workerUpdateDate(worker.getUpdated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .build();

        return workerDto;
    }

    @Override
    public List<WorkerDto> getAllWorker() {
        List<WorkerDto> list = new ArrayList<>();
        List<Worker> workerlist = workerRepository.findAll();

        for (Worker worker : workerlist) {
            list.add(new WorkerDto(
                    worker.getWorkerId(),
                    worker.getWorkerName(),
                    worker.getWorkerStatus(),
                    worker.getOrganization().getOrganizationId(),
                    worker.getWorkerGender(),
                    worker.getWorkerAge(),
                    worker.getWorkerPhone(),
                    worker.getWorkerEmail(),
                    worker.getWorkerBirth(),
                    worker.getWorkerNationality(),
                    null,
                    worker.getCreated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")),
                    worker.getUpdated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            ));
        }

        return list;
    }

    @Override
    public WorkerDto getWorkerById(String id) {
        Worker worker = workerRepository.findById(id)
                .orElseThrow(() -> new NoContentException("없는 근무자입니다."));


        WorkerDto workerDto = WorkerDto.builder()
                .workerId(worker.getWorkerId())
                .workerName(worker.getWorkerName())
                .workerStatus(worker.getWorkerStatus())
                .workerOrganizationId(worker.getOrganization().getOrganizationId())
                .workerGender(worker.getWorkerGender())
                .workerAge(worker.getWorkerAge())
                .workerPhone(worker.getWorkerPhone())
                .workerEmail(worker.getWorkerEmail())
                .workerBirth(worker.getWorkerBirth())
                .workerNationality(worker.getWorkerNationality())
                .workerProfile(null)
                .workerRegistDate(worker.getCreated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .workerUpdateDate(worker.getUpdated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .build();

        return workerDto;
    }

    @Override
    public void updateWorker(WorkerRegistDto input) {
        Worker worker = workerRepository.findById(input.getWorkerId())
                .orElseThrow(() -> new IllegalArgumentException("없는 근무자입니다."));

        Organization organization = organizationRepository.findById(input.getWorkerOrganizationId())
                .orElseThrow(() -> new NoContentException("없는 기관입니다."));


        worker.setWorkerId(worker.getWorkerId());
        worker.setWorkerPw(passwordEncoder.encode(input.getWorkerPwd()));
        worker.setWorkerName(input.getWorkerName());
        worker.setWorkerStatus(worker.getWorkerStatus());
        worker.setOrganization(organization);
        worker.setWorkerGender(input.getWorkerGender());
        worker.setWorkerAge(input.getWorkerAge());
        worker.setWorkerPhone(input.getWorkerPhone());
        worker.setWorkerEmail(input.getWorkerEmail());
        worker.setWorkerBirth(input.getWorkerBirth());
        worker.setWorkerNationality(input.getWorkerNationality());
        worker.setWorkerProfile(worker.getWorkerProfile());

    }

    @Override
    @Transactional
    public void updateWorkerPw(WorkerUpdatePwDto input) {
        Worker worker = workerRepository.findById(input.getWorkerId())
                .orElseThrow(() -> new NoContentException("없는 근무자입니다."));

        if(!passwordEncoder.matches(input.getWorkerPwd(),worker.getWorkerPw()))
            throw new NotMatchException("입력하신 비밀번호가 다릅니다.");

        worker.setWorkerPw(passwordEncoder.encode(input.getWorkerNewPwd()));
    }

    @Override
    public boolean validWorkerId(String workerId) {
        return workerRepository.existsByWorkerId(workerId);
    }

    @Override
    public void startWorker(String id) {
        Worker worker = workerRepository.findById(id)
                .orElseThrow(() -> new NoContentException("없는 근무자입니다."));

        WorkerAttendanceStart workerAttendanceStart = WorkerAttendanceStart.builder()
                        .startTime(LocalDateTime.now())
                        .worker(worker)
                        .build();

        workerAttendanceStartRepository.save(workerAttendanceStart);
    }

    @Override
    public void endWorker(String id) {
        Worker worker = workerRepository.findById(id)
                .orElseThrow(() -> new NoContentException("없는 근무자입니다."));

        WorkerAttendanceEnd workerAttendanceEnd = WorkerAttendanceEnd.builder()
                .endTime(LocalDateTime.now())
                .worker(worker)
                .build();

        workerAttendanceEndRepository.save(workerAttendanceEnd);

    }


    @Override
    public void registWorker(WorkerRegistDto input) {

        Organization organization = organizationRepository.findById(input.getWorkerOrganizationId())
                .orElseThrow(() -> new NoContentException("없는 기관입니다."));


        Worker worker = Worker.builder()
                .workerId(input.getWorkerId())
                .workerPw(passwordEncoder.encode(input.getWorkerPwd()))
                .workerName(input.getWorkerName())
                .workerStatus(0)
                .organization(organization)
                .workerGender(input.getWorkerGender())
                .workerAge(input.getWorkerAge())
                .workerPhone(input.getWorkerPhone())
                .workerEmail(input.getWorkerEmail())
                .workerBirth(input.getWorkerBirth())
                .workerNationality(input.getWorkerNationality())
                .workerProfile(new byte[0])
                .build();

        workerRepository.save(worker);
    }

    @Override
    public void deleteWorker(String id) {

        Worker worker = workerRepository.findById(id)
                .orElseThrow(() -> new NoContentException("없는 근무자입니다."));

        workerRepository.delete(worker);
    }

    @Override
    public List<DateTimeDto> getWorkerStart(String id) {
        List<DateTimeDto> list = new ArrayList<>();
        List<WorkerAttendanceStart> workerStartList =
                workerAttendanceStartRepository.findAll().stream()
                        .filter(workerAttendanceStart -> workerAttendanceStart.getWorker().getWorkerId().equals(id))
                        .collect(Collectors.toList());


        for (WorkerAttendanceStart startList : workerStartList) {
            list.add(new DateTimeDto(
                    startList.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            ));
        }

        return list;
    }

    @Override
    public List<DateTimeDto> getWorkerMonthStart(String id, String month) {
        List<DateTimeDto> list = new ArrayList<>();
        List<WorkerAttendanceStart> workerMonthStartList =
                workerAttendanceStartRepository.findAll().stream()
                        .filter(workerAttendanceStart -> workerAttendanceStart.getWorker().getWorkerId().equals(id))
                        .filter(workerAttendanceStart -> workerAttendanceStart.getStartTime().format(DateTimeFormatter.ofPattern("M")).equals(month))
                        .collect(Collectors.toList());


        for (WorkerAttendanceStart monthStartList : workerMonthStartList) {
            list.add(new DateTimeDto(
                    monthStartList.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            ));
        }

        return list;
    }

    @Override
    public List<DateTimeDto> getWorkerEnd(String id) {
        List<DateTimeDto> list = new ArrayList<>();
        List<WorkerAttendanceEnd> workerEndList =
                workerAttendanceEndRepository.findAll().stream()
                        .filter(workerAttendanceEnd -> workerAttendanceEnd.getWorker().getWorkerId().equals(id))
                        .collect(Collectors.toList());


        for (WorkerAttendanceEnd endList : workerEndList) {
            list.add(new DateTimeDto(
                    endList.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            ));
        }

        return list;
    }

    @Override
    public List<DateTimeDto> getWorkerMonthEnd(String id, String month) {
        List<DateTimeDto> list = new ArrayList<>();
        List<WorkerAttendanceEnd> workerMonthEndList =
                workerAttendanceEndRepository.findAll().stream()
                        .filter(workerAttendanceEnd -> workerAttendanceEnd.getWorker().getWorkerId().equals(id))
                        .filter(workerAttendanceEnd -> workerAttendanceEnd.getEndTime().format(DateTimeFormatter.ofPattern("M")).equals(month))
                        .collect(Collectors.toList());


        for (WorkerAttendanceEnd monthEndList : workerMonthEndList) {
            list.add(new DateTimeDto(
                    monthEndList.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            ));
        }

        return list;
    }
}
