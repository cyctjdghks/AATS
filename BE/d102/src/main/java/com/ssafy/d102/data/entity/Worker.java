package com.ssafy.d102.data.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "worker")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Worker extends BaseEntity {

    @Id
    @Column(name = "worker_id", length = 50, nullable = false)
    private String workerId;

    @Column(name = "worker_pw", length = 70, nullable = false)
    private String workerPw;

    @Column(name = "worker_name", length = 10, nullable = false)
    private String workerName;

    @Column(name = "worker_status", nullable = false)
    private Integer workerStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "organizationId", nullable = false)
    private Organization organization;

    @Column(name = "worker_gender")
    private Integer workerGender;

    @Column(name = "worker_age")
    private Integer workerAge;

    @Column(name = "worker_phone", length = 20)
    private String workerPhone;

    @Column(name = "worker_email", length = 100)
    private String workerEmail;

    @Column(name = "worker_brith", length = 10)
    private String workerBirth;

    @Column(name = "worker_nationality", length = 100)
    private String workerNationality;

    @Column(name = "worker_profile", nullable = false)
    private byte[] workerProfile;

    // getters and setters
    // constructors
    // other methods
}
