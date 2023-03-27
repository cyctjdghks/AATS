package com.ssafy.d102.data.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_attendance_start")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserAttendanceStart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "start_no")
    private Long startNo;

    @Column(name = "start_time", nullable = false)
    private LocalDateTime startTime;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "userId")
    private User user;

    // Constructors, getters/setters, etc.
}