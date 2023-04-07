package com.ssafy.d102.data.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "contact")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Contact extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contact_no")
    private Long contactNo;

    @Column(name = "contact_name", length = 15)
    private String contactName;
    @Column(name = "contact_number", length = 30)
    private String contactNumber;
    @Column(name = "contact_email", length = 50)
    private String contactEmail;
    @Column(name = "contact_msg", length = 300)
    private String contactMsg;

}
