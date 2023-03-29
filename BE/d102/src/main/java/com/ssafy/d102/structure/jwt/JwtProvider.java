package com.ssafy.d102.structure.jwt;

import com.ssafy.d102.data.dto.OrganizationDto;
import com.ssafy.d102.data.dto.response.UserDto;
import com.ssafy.d102.data.dto.response.WorkerDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

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
        claims.put("role", 0);
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
        claims.put("workerOrganization", workerDto.getOrganizationId());
        claims.put("role", 1);
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
        claims.put("role", 2);
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

    public boolean checkRole(String jwtToken, String URI){
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(secretKey.getBytes())
                    .parseClaimsJws(jwtToken)
                    .getBody();

            int role = Integer.parseInt(String.valueOf(claims.get("role")));

            if(role >=3 || role<0) return false;

            if(URI.equals("membership") || URI.equals("cctv")){
                return true;
            }else if(URI.equals("user") && role >= 0){
                return true;
            }else if(URI.equals("worker") && role >= 1){
                return true;
            }else if(URI.equals("organization") && role == 2){
                return true;
            }else{
                return false;
            }

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}