package com.ssafy.d102.data.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "membership")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Membership {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "membership_no")
    private Long membershipNo;

    @Column(name = "membership_type")
    private Integer membershipType;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId", unique = true)
    private User user;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "membership", cascade = CascadeType.ALL)
    private CountBasedMembership countBasedMembership;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "membership", cascade = CascadeType.ALL)
    private TimeLimitedMembership timeLimitedMembership;

    // getters, setters, constructors
}
