package com.ssafy.d102.data.entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
@Entity
@Table(name = "worker_attendance_end")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WorkerAttendanceEnd  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "end_no")
    private Long endNo;

    @Column(name = "end_time", nullable = false, columnDefinition = "datetime default now()")
    private LocalDateTime endTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "workerId", nullable = false)
    private Worker worker;

    // 생성자, getter, setter, toString 등 생략
}