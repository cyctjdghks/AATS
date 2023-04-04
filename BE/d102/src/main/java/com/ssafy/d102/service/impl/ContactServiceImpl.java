package com.ssafy.d102.service.impl;

import com.ssafy.d102.data.dto.request.ContactDto;
import com.ssafy.d102.data.entity.Contact;
import com.ssafy.d102.repository.ContactRepository;
import com.ssafy.d102.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactRepository repository;

    @Override
    public void saveContact(ContactDto contactDto) {
        repository.save(Contact.builder()
                        .contactEmail(contactDto.getEmail())
                        .contactMsg(contactDto.getMsg())
                        .contactName(contactDto.getName())
                        .contactNumber(contactDto.getNumber())
                .build());
    }
}
