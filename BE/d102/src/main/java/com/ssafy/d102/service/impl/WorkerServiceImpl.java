package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.dto.request.WorkerLoginDto;
import com.ssafy.d102.data.dto.request.WorkerRegistDto;
import com.ssafy.d102.data.dto.request.WorkerUpdatePwDto;
import com.ssafy.d102.data.dto.response.DateTimeDto;
import com.ssafy.d102.data.dto.response.WorkerDto;
import com.ssafy.d102.data.entity.*;
import com.ssafy.d102.repository.*;
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

    private final ImageRepository imageRepository;

    @Override
    public WorkerDto loginWorker(WorkerLoginDto input) {

        Worker worker = getWorkerById(input.getWorkerId());

        if(!passwordEncoder.matches(input.getWorkerPwd(), worker.getWorkerPw())) {
            throw new IllegalArgumentException("PW가 다릅니다.");
        }

        return new WorkerDto().entityToDto(worker);
    }

    @Override
    public List<WorkerDto> getAllWorker() {
        List<WorkerDto> list = new ArrayList<>();
        List<Worker> workerlist = workerRepository.findAll();

        for (Worker worker : workerlist) {
            list.add(new WorkerDto().entityToDto(worker));
        }

        return list;
    }

    @Override
    public WorkerDto getWorker(String id) {
        Worker worker = getWorkerById(id);

        return new WorkerDto().entityToDto(worker);
    }

    @Override
    public void updateWorker(WorkerRegistDto input) {
        Worker worker = getWorkerById(input.getWorkerId());

        Worker saveworker = Worker.builder()
                .workerId(worker.getWorkerId())
                .workerPw(passwordEncoder.encode(input.getWorkerPwd()))
                .workerName(input.getWorkerName())
                .workerStatus(worker.getWorkerStatus())
                .organization(getOrganizationById(input.getOrganizationId()))
                .workerGender(input.getWorkerGender())
                .workerAge(input.getWorkerAge())
                .workerPhone(input.getWorkerPhone())
                .workerEmail(input.getWorkerEmail())
                .workerBirth(input.getWorkerBirth())
                .workerNationality(input.getWorkerNationality())
                .build();

        workerRepository.save(saveworker);
    }

    @Override
    public void updateWorkerPw(WorkerUpdatePwDto input) {
        Worker worker = getWorkerById(input.getWorkerId());

        if(!passwordEncoder.matches(input.getWorkerPwd(),worker.getWorkerPw()))
            throw new IllegalArgumentException("입력하신 비밀번호가 다릅니다.");

        worker.setWorkerPw(passwordEncoder.encode(input.getWorkerNewPwd()));
        workerRepository.save(worker);
    }

    @Override
    public boolean validWorkerId(String workerId) {
        return workerRepository.existsByWorkerId(workerId);
    }

    @Override
    public void startWorker(String id) {
        Worker worker = getWorkerById(id);

        worker.setWorkerStatus(1);

        WorkerAttendanceStart workerAttendanceStart = WorkerAttendanceStart.builder()
                .startTime(LocalDateTime.now().plusHours(9))
                .worker(worker)
                .build();

        workerRepository.save(worker);
        workerAttendanceStartRepository.save(workerAttendanceStart);
    }

    @Override
    public void endWorker(String id) {
        Worker worker = getWorkerById(id);

        worker.setWorkerStatus(0);

        WorkerAttendanceEnd workerAttendanceEnd = WorkerAttendanceEnd.builder()
                .endTime(LocalDateTime.now().plusHours(9))
                .worker(worker)
                .build();

        workerRepository.save(worker);
        workerAttendanceEndRepository.save(workerAttendanceEnd);
    }


    @Override
    public void registWorker(WorkerRegistDto input) {

        Organization organization = getOrganizationById(input.getOrganizationId());

         Image image = getImageById(input.getWorkerImageId());

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
                 .Image(image)
                 .build();

        workerRepository.save(worker);
    }

    @Override
    public void deleteWorker(String id) {

        Worker worker = getWorkerById(id);

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
    public List<DateTimeDto> getWorkerMonthStart(String id, String year, String month) {
        List<DateTimeDto> list = new ArrayList<>();
        List<WorkerAttendanceStart> workerMonthStartList =
                workerAttendanceStartRepository.findAll().stream()
                        .filter(workerAttendanceStart -> workerAttendanceStart.getWorker().getWorkerId().equals(id))
                        .filter(workerAttendanceStart -> workerAttendanceStart.getStartTime().format(DateTimeFormatter.ofPattern("yyyy")).equals(year))
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
    public List<DateTimeDto> getWorkerMonthEnd(String id, String year, String month) {
        List<DateTimeDto> list = new ArrayList<>();
        List<WorkerAttendanceEnd> workerMonthEndList =
                workerAttendanceEndRepository.findAll().stream()
                        .filter(workerAttendanceEnd -> workerAttendanceEnd.getWorker().getWorkerId().equals(id))
                        .filter(workerAttendanceEnd -> workerAttendanceEnd.getEndTime().format(DateTimeFormatter.ofPattern("yyyy")).equals(year))
                        .filter(workerAttendanceEnd -> workerAttendanceEnd.getEndTime().format(DateTimeFormatter.ofPattern("M")).equals(month))
                        .collect(Collectors.toList());


        for (WorkerAttendanceEnd monthEndList : workerMonthEndList) {
            list.add(new DateTimeDto(
                    monthEndList.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
            ));
        }

        return list;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public Worker getWorkerById(String workerId){
        return workerRepository.findById(workerId)
                .orElseThrow(() -> new IllegalArgumentException("Id를 확인해주세요."));
    }
    public Image getImageById(Long imageId){
        if(imageId == null) return null;
        return imageRepository.findById(imageId)
                .orElse(null);
    }
    public Organization getOrganizationById(String organizationId){
        return organizationRepository.findById(organizationId)
                .orElseThrow(() -> new IllegalArgumentException("없는 기관입니다."));
    }

}
