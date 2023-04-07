package com.ssafy.d102.repository;

import com.ssafy.d102.data.entity.CCTV;
import com.ssafy.d102.data.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
