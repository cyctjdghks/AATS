package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.dto.response.cctvDto;
import com.ssafy.d102.data.dto.request.cctvRegistDto;
import com.ssafy.d102.data.entity.CCTV;
import com.ssafy.d102.repository.CCTVRepository;
import com.ssafy.d102.repository.OrganizationRepository;
import com.ssafy.d102.service.CCTVService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CCTVServiceImpl implements CCTVService {

    private final CCTVRepository cctvRepository;
    private final OrganizationRepository organizationRepository;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void registCctv(cctvRegistDto input) {
        CCTV cctv = CCTV.builder()
                .CCTVLat(input.getCctvLat())
                .CCTVLng(input.getCctvLng())
                .CCTVInformation(input.getCctvInformation())
                .organization(organizationRepository.findById(input.getOrganizationId()).get())
                .build();

        cctvRepository.save(cctv);
    }

    @Override
    public cctvDto getCctv(Long cctvNo) {
        CCTV cctv = cctvRepository.findById(cctvNo)
                .orElseThrow(() -> new IllegalArgumentException("cctv가 없습니다"));

        //TODO : entityToDto
//        cctvDto cctvDto = new cctvDto(
//                cctv.getCCTVNo(),
//                cctv.getCCTVLat(),
//                cctv.getCCTVLat(),
//                cctv.getCCTVInformation(),
//                cctv.getOrganization().getOrganizationId(),
//                cctv.getCreated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")),
//                cctv.getUpdated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"))
//        );

        return new cctvDto().entityToDto(cctv);
    }

    @Override
    public void deleteCctv(Long cctvNo) {
        CCTV cctv = cctvRepository.findById(cctvNo)
                .orElseThrow(() -> new IllegalArgumentException("cctv가 없습니다"));

        cctvRepository.delete(cctv);
    }
}
