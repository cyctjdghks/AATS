package com.ssafy.d102.data.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "membership")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Membership {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "membership_no")
    private long membershipNo;

    @Column(name = "membership_type")
    private int membershipType;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "userId", unique = true)
    private User user;

    // getters, setters, constructors
}
