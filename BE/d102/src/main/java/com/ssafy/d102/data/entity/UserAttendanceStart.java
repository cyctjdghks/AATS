package com.ssafy.d102.data.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_attendance_start")
public class UserAttendanceStart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "start_no")
    private Long startNo;

    @Column(name = "start_time", nullable = false)
    private LocalDateTime startTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Constructors, getters/setters, etc.
}