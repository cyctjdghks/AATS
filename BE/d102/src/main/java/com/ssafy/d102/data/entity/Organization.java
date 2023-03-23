package com.ssafy.d102.data.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "organization")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Organization extends BaseEntity {
    @Id
    @Column(name = "organization_id", length = 50, nullable = false)
    private String organizationId;

    @Column(name = "organization_pw", length = 70, nullable = false)
    private String organizationPw;

    @Column(name = "organization_name", length = 10, nullable = false)
    private String organizationName;

    @Column(name = "organization_lng")
    private Double organizationLng;

    @Column(name = "organization_lat")
    private Double organizationLat;

    @Column(name = "organization_session_id", length = 10)
    private String organizationSessionId;


    // getters and setters
    // constructors
    // other methods
}
