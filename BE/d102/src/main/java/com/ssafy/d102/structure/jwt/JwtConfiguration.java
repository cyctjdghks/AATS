package com.ssafy.d102.structure.jwt;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
//TODO: webConfig인데 왜 이름이 jwtConfig임? (해결)
public class JwtConfiguration implements WebMvcConfigurer {
    private final JwtInterceptor jwtInterceptor;
    public JwtConfiguration(JwtInterceptor jwtInterceptor) {
        this.jwtInterceptor = jwtInterceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(jwtInterceptor)
                .order(1)
                .addPathPatterns("/openvidu"
//                        "/organization/**", "/worker/**", "/user/**", "/cctv/**", "/membership/**"
                )   // 탐색 부분 설정
//                .excludePathPatterns("/user/login", "/user/regist", // 탐색 제외 부분 설정
//                        "/worker/login", "/worker/regist",
//                        "/organization/login", "/organization/regist")
                        ;
    }
}