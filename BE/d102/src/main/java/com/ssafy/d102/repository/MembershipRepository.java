package com.ssafy.d102.repository;

import com.ssafy.d102.data.entity.Membership;
import com.ssafy.d102.data.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MembershipRepository extends JpaRepository<Membership, Long> {
    Membership findByUser(User user);
}
