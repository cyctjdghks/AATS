package com.ssafy.d102.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AllPeople {
    private Integer organization;
    private Integer worker;
    private Integer user;

}
