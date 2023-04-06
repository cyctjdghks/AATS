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
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
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

        if(workerStartList.size() == 0) return list;

        list.add(new DateTimeDto(workerStartList.get(0).getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))));

        for(int i=0;i<workerStartList.size()-1; i++){
            WorkerAttendanceStart temp = workerStartList.get(i);
            WorkerAttendanceStart temp2 = workerStartList.get(i+1);
            Period period = Period.between(temp.getStartTime().toLocalDate(), temp2.getStartTime().toLocalDate());

            if(period.getMonths() != 0 ){
                list.add(new DateTimeDto(
                        temp2.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
                ));
            }

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

        if(workerMonthStartList.size() == 0) return list;

        list.add(new DateTimeDto(workerMonthStartList.get(0).getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))));

        for(int i=0;i<workerMonthStartList.size()-1; i++){
            WorkerAttendanceStart temp = workerMonthStartList.get(i);
            WorkerAttendanceStart temp2 = workerMonthStartList.get(i+1);
            Period period = Period.between(temp.getStartTime().toLocalDate(), temp2.getStartTime().toLocalDate());

            if(period.getMonths() != 0 ){
                list.add(new DateTimeDto(
                        temp2.getStartTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
                ));
            }

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


        if(workerEndList.size() == 0) return list;

        list.add(new DateTimeDto(workerEndList.get(workerEndList.size()-1).getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))));

        for(int i=workerEndList.size()-1;i>0; i--){
            WorkerAttendanceEnd temp = workerEndList.get(i);
            WorkerAttendanceEnd temp2 = workerEndList.get(i-1);
            Period period = Period.between(temp.getEndTime().toLocalDate(), temp2.getEndTime().toLocalDate());

            if(period.getMonths() != 0 ){
                list.add(new DateTimeDto(
                        temp2.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
                ));
            }

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

        if(workerMonthEndList.size() == 0) return list;

        list.add(new DateTimeDto(workerMonthEndList.get(workerMonthEndList.size()-1).getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))));

        for(int i=workerMonthEndList.size()-1;i>0; i--){
            WorkerAttendanceEnd temp = workerMonthEndList.get(i);
            WorkerAttendanceEnd temp2 = workerMonthEndList.get(i-1);
            Period period = Period.between(temp.getEndTime().toLocalDate(), temp2.getEndTime().toLocalDate());

            if(period.getMonths() != 0 ){
                System.out.println(ChronoUnit.DAYS.between(temp2.getEndTime(),temp.getEndTime()));
                list.add(new DateTimeDto(
                        temp2.getEndTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
                ));
            }

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
