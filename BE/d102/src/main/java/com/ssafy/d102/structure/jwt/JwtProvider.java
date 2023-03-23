package com.ssafy.d102.structure.jwt;

import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.UserDto;
import com.ssafy.d102.data.dto.WorkerDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.xml.bind.DatatypeConverter;
import java.time.Duration;
import java.util.Base64;
import java.util.Date;

@Slf4j
@Component
public class JwtProvider {

    @Value("${jwt.secretKey}")
    private String secretKey;

    @Value("${jwt.expirationTime}")
    private long expiredTime;


    public String createToken(UserDto userDto) {
        Claims claims = Jwts.claims();
        claims.put("userId", userDto.getUserId());
        claims.put("userName", userDto.getUserName());
        claims.put("userOrganization", userDto.getOrganizationId());
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + expiredTime))
                .signWith(SignatureAlgorithm.HS256, secretKey.getBytes())
                .compact();
    }

    public String createToken(WorkerDto workerDto) {
        Claims claims = Jwts.claims();
        claims.put("workerId", workerDto.getWorkerId());
        claims.put("workerName", workerDto.getWorkerName());
        claims.put("workerOrganization", workerDto.getWorkerOrganizationId());
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + expiredTime))
                .signWith(SignatureAlgorithm.HS256, secretKey.getBytes())
                .compact();
    }

    public String createToken(OrganizationDto organizationDto) {
        Claims claims = Jwts.claims();
        claims.put("organizationId", organizationDto.getOrganizationId());
        claims.put("organizationName", organizationDto.getOrganizationName());
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + expiredTime))
                .signWith(SignatureAlgorithm.HS256, secretKey.getBytes())
                .compact();
    }

    public String createExpireToken() {
        Claims claims = Jwts.claims();
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + 0))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public String getUserInfo(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().get("userId").toString();
    }

    public String getWorkerInfo(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().get("workerId").toString();
    }

    public String getOrganizationInfo(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().get("organizationId").toString();
    }

    public boolean validateToken(String jwtToken) {
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(secretKey.getBytes())
                    .parseClaimsJws(jwtToken)
                    .getBody();
            return !claims.getExpiration().before(new Date());
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}