package com.ssafy.d102.data.entity;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user")
public class User extends BaseEntity{

    @Id
    @Column(name = "user_id", length = 50, nullable = false)
    private String userId;

    @Column(name = "user_pwd", length = 50, nullable = false)
    private String userPwd;

    @Column(name = "user_name", length = 50, nullable = false)
    private String userName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "organization_id", nullable = false)
    private Organization organization;

    @Column(name = "user_gender")
    private Integer userGender;

    @Column(name = "user_age")
    private Integer userAge;

    @Column(name = "user_phone", length = 20)
    private String userPhone;

    @Column(name = "user_email", length = 100)
    private String userEmail;

    @Column(name = "user_birth", length = 10)
    private String userBirth;

    @Column(name = "user_nationality", length = 100)
    private String userNationality;

    @Column(name = "user_status", nullable = false)
    private Integer userStatus;

    @Column(name = "user_profile", nullable = false)
    private byte[] userProfile;

    // getters and setters

}

