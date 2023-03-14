package com.ssafy.d102.data.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "cctv")
public class CCTV extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cctv_no")
    private long id;

    @Column(name = "cctv_lat")
    private float latitude;

    @Column(name = "cctv_lng")
    private float longitude;

    @Column(name = "cctv_information")
    private String information;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "organization_id")
    private Organization organization;

    // getters and setters
}