package com.ssafy.d102.data.entity;

import javax.persistence.*;

@Entity
@Table(name = "membership")
public class Membership {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "membership_no")
    private long no;

    @Column(name = "membership_type")
    private int type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    // getters, setters, constructors
}
