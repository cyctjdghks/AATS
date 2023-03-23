package com.ssafy.d102.data.entity;
import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "worker_attendance_start")
@Getter
public class WorkerAttendanceStart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "start_no")
    private Long startNo;

    @Column(name = "start_time", nullable = false)
    private LocalDateTime startTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "workerId", nullable = false)
    private Worker worker;

    // 생성자, getter, setter, toString 등 생략
}