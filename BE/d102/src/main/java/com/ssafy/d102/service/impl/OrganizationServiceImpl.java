package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.Exception.NoContentException;
import com.ssafy.d102.data.Exception.NotMatchException;
import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.OrganizationLoginDto;
import com.ssafy.d102.data.dto.OrganizationSetSessionDto;
import com.ssafy.d102.data.dto.OrganizationUpdatePwDto;
import com.ssafy.d102.data.entity.Organization;
import com.ssafy.d102.repository.OrganizationRepository;
import com.ssafy.d102.service.OrganizationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrganizationServiceImpl implements OrganizationService {
    private final OrganizationRepository repository;
    private final PasswordEncoder passwordEncoder;

    // 기관 로그인
    @Override
    public OrganizationDto loginOrganization(OrganizationLoginDto input) {
        // getById로 비밀번호 및 정보 받기
        Organization organization = getById(input.getOrganizationId());
        // 입력한 비밀번호와 저장된 비밀번호가 같은지 확인
        if(!passwordEncoder.matches(input.getOrganizationPwd(),organization.getOrganizationPw())){
            throw new NotMatchException("PW가 다릅니다.");
        }
        // organizationDto로 기관 정보 반환
        //TODO: 이걸 Dto에 static 메소드로 만들어 봐라
        return entityToDto(organization);
    }

    // 기관 등록
    @Transactional
    @Override
    public void registOrganization(OrganizationDto input) {

        repository.save(Organization.builder()
                .organizationId(input.getOrganizationId())
                .organizationPw(passwordEncoder.encode(input.getOrganizationPw()))
                .organizationName(input.getOrganizationName())
                .organizationSessionId(input.getOrganizationSessionId()==null ? null : input.getOrganizationSessionId())
                .organizationLng(input.getOrganizationLng()==null ? null : input.getOrganizationLng())
                .organizationLat(input.getOrganizationLat()==null ? null : input.getOrganizationLat())
                .build());

    }

    @Override
    public List<OrganizationDto> getAllOrganization() {

        List<Organization> inputList = repository.findAll();

        //TODO: 이걸로 바꿔보기
//        return repository.findAll().stream()
//                .map(organization -> entityToDto(organization))
//                .collect(Collectors.toList());

        List<OrganizationDto> outputList = new ArrayList<>();
        for(int i=0;i<inputList.size();i++) {
            outputList.add(entityToDto(inputList.get(i)));
        }

        return outputList;
    }

    @Override
    public OrganizationDto getOrganization(String organizationId) {
        Organization organization = getById(organizationId);
        return entityToDto(organization);
    }

    @Transactional
    @Override
    public OrganizationDto updateOrganization(OrganizationDto organizationDto) {
        Organization organization = getById(organizationDto.getOrganizationId());

        //TODO: 중괄호 다 넣기
        if(organizationDto.getOrganizationLng() != null)
            organization.setOrganizationLng(organizationDto.getOrganizationLng());
        if(organizationDto.getOrganizationLat() != null)
            organization.setOrganizationLat(organizationDto.getOrganizationLat());
        if(organizationDto.getOrganizationName() != null)
            organization.setOrganizationName(organizationDto.getOrganizationName());
        if(organizationDto.getOrganizationSessionId() != null)
            organization.setOrganizationSessionId(organizationDto.getOrganizationSessionId());

        repository.save(organization);

        return entityToDto(organization);
    }

    @Override
    public boolean validOrganizationId(String organizationId) {
        return repository.existsByOrganizationId(organizationId);
    }

    @Transactional
    @Override
    public void changePw(OrganizationUpdatePwDto organizationUpdatePwDto) {
        Organization organization = getById(organizationUpdatePwDto.getOrganizationId());

        if(!passwordEncoder.matches(organizationUpdatePwDto.getOrganizationPwd(),organization.getOrganizationPw())){
            throw new NotMatchException("PW가 다릅니다.");
        }

        // organizationNewPwd
        organization.setOrganizationPw(passwordEncoder.encode(organizationUpdatePwDto.getOrganizationNewPwd()));
        repository.save(organization);
    }

    @Override
    public void setSessionId(OrganizationSetSessionDto organizationSetSessionDto) {
        Organization organization = getById(organizationSetSessionDto.getOrganizationId());

        organization.setOrganizationSessionId(organizationSetSessionDto.getSessionId());

        repository.save(organization);
    }

    @Override
    public String getSessionId(String organizationId) {
        Organization organization = getById(organizationId);

        return organization.getOrganizationSessionId();
    }


    //TODO: 참 잘했어요
    private Organization getById(String OrganizationId){
        Organization organization = repository.findById(OrganizationId)
                .orElseThrow(() -> new NoContentException("Id를 확인해주세요."));
        return organization;
    }

    private OrganizationDto entityToDto(Organization organization){
        return OrganizationDto.builder()
                .organizationId(organization.getOrganizationId())
                .organizationName(organization.getOrganizationName())
                .organizationSessionId(organization.getOrganizationSessionId()==null ? null : organization.getOrganizationSessionId())
                .organizationLng(organization.getOrganizationLng() == null ? null : organization.getOrganizationLng())
                .organizationLat(organization.getOrganizationLat() == null ? null : organization.getOrganizationLat())
                .organizationRegistDate(organization.getCreated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .organizationUpdateDate(organization.getUpdated_at().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm")))
                .build();
    }

}













