package com.ssafy.d102.data.dto;

import com.ssafy.d102.data.entity.Worker;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WorkerDto {
    private String workerId;
    private String workerName;
    private Integer workerStatus;
    private String OrganizationId;
    private String OrganizationName;
    private Integer workerGender;
    private Integer workerAge;
    private String workerPhone;
    private String workerEmail;
    private String workerBirth;
    private String workerNationality;
    private Long workerProfile;
    private String workerProfilePath;

    public WorkerDto entityToDto(Worker worker){
        return WorkerDto.builder()
                .workerId(worker.getWorkerId())
                .workerName(worker.getWorkerName())
                .workerStatus(worker.getWorkerStatus())
                .OrganizationId(worker.getOrganization()==null? null: worker.getOrganization().getOrganizationId())
                .OrganizationName(worker.getOrganization()==null? null: worker.getOrganization().getOrganizationName())
                .workerGender(worker.getWorkerGender())
                .workerAge(worker.getWorkerAge())
                .workerPhone(worker.getWorkerPhone())
                .workerEmail(worker.getWorkerEmail())
                .workerBirth(worker.getWorkerBirth())
                .workerNationality(worker.getWorkerNationality())
                .workerProfile(worker.getImage() == null ? null : worker.getImage().getImageId())
                .workerProfilePath(worker.getImage()==null? null: worker.getImage().getStoredFileName())
                .build();
    }
}
