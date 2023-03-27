package com.ssafy.d102.data.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "cctv")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CCTV extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cctv_no")
    private long CCTVNo;

    @Column(name = "cctv_lat")
    private Double CCTVLat;

    @Column(name = "cctv_lng")
    private Double CCTVLng;

    @Column(name = "cctv_information")
    private String CCTVInformation;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "organizationId")
    private Organization organization;

    // getters and setters
}