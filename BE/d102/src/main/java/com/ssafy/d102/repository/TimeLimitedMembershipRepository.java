package com.ssafy.d102.repository;

import com.ssafy.d102.data.entity.Membership;
import com.ssafy.d102.data.entity.TimeLimitedMembership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TimeLimitedMembershipRepository extends JpaRepository<TimeLimitedMembership, Long> {
    Optional<TimeLimitedMembership> findByMembership(Membership membership);
}
