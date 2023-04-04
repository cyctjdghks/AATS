package com.ssafy.d102.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContactDto {

    private String name;
    private String number;
    private String email;
    private String msg;

}
