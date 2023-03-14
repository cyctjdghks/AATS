package com.ssafy.d102.structure.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI openAPI(@Value("${spring-doc: version}") String springDocVersion) {
        Info info = new Info()
                .title("D102 Swagger")
                .version(springDocVersion)
                .description("API에 대한 설명 부분");

        return new OpenAPI()
                .components(new Components())
                .info(info);
    }
}
