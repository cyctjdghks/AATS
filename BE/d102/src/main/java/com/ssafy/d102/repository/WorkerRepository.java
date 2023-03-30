package com.ssafy.d102.repository;

import com.ssafy.d102.data.entity.Organization;
import com.ssafy.d102.data.entity.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkerRepository extends JpaRepository<Worker, String> {
    boolean existsByWorkerId(String workernId);

    List<Worker> findByOrganization(Organization organization);
}
