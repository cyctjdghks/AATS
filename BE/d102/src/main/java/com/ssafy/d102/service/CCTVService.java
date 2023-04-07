package com.ssafy.d102.service;

import com.ssafy.d102.data.dto.response.cctvDto;
import com.ssafy.d102.data.dto.request.cctvRegistDto;

public interface CCTVService {
    void registCctv(cctvRegistDto input);

    cctvDto getCctv(Long cctvNo);

    void deleteCctv(Long cctvNo);
}
