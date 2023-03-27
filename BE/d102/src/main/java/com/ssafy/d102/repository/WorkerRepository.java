package com.ssafy.d102.repository;

import com.ssafy.d102.data.entity.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkerRepository extends JpaRepository<Worker, String> {
    boolean existsByWorkerId(String workernId);
}
