package com.ssafy.d102;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class D102Application {

	public static void main(String[] args) {
		SpringApplication.run(D102Application.class, args);
	}

}
