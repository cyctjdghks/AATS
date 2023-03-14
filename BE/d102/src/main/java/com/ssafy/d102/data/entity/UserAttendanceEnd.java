package com.ssafy.d102.data.entity;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_attendance_end")
public class UserAttendanceEnd {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "end_no")
    private Long endNo;

    @Column(name = "end_time", nullable = false, columnDefinition = "datetime default now()")
    private LocalDateTime endTime;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", insertable = false, updatable = false)
    private User user;

    // Getter, Setter
}
