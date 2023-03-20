package com.ssafy.d102.data.entity;
import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "time_limited_membership")
@Getter
public class TimeLimitedMembership {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "type_1_no")
    private Long type1No;

    @Column(name = "start_time", nullable = false)
    private LocalDateTime startTime;

    @Column(name = "end_time", nullable = false)
    private LocalDateTime endTime;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "membership_no", nullable = false)
    private Membership membership;

    // constructors, getters, setters
}
