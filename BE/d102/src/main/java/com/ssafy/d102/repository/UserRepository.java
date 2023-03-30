package com.ssafy.d102.repository;

import com.ssafy.d102.data.entity.Organization;
import com.ssafy.d102.data.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    boolean existsByUserId(String userId);
    List<User> findByOrganization(Organization organization);
}
