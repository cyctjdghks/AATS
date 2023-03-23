package com.ssafy.d102.controller;

import com.ssafy.d102.data.Exception.NoContentException;
import com.ssafy.d102.data.Exception.UnAuthorizationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;
@Slf4j
@ControllerAdvice
public class RestControllerAdvice {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleAllUncaughtException(Exception e){
        Map<String, Object> data = new HashMap<>();

        e.printStackTrace();

        data.put("msg", "fail");

        return new ResponseEntity<>(data, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(NoContentException.class)
    public ResponseEntity<?> handleNoContentException(NoContentException e){
        Map<String, Object> data = new HashMap<>();
        //TODO: 이미 어디서 난 오류인지 아는데 굳이 Trace?
        e.printStackTrace();
        data.put("msg", "fail");
        data.put("error", e.toString());

        return new ResponseEntity<>(data, HttpStatus.NO_CONTENT);

    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> handleIllegalArgumentException(Exception e){
        Map<String, Object> data = new HashMap<>();

        data.put("msg", e.getMessage());
        data.put("error", e.toString());

        return new ResponseEntity<>(data, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UnAuthorizationException.class)
    public ResponseEntity<?> handlerUnAuthorizationException(UnAuthorizationException e){
        Map<String, Object> data = new HashMap<>();
        e.printStackTrace();
        data.put("msg", "fail");
        data.put("error", e.toString());

        return new ResponseEntity<>(data, HttpStatus.UNAUTHORIZED);
    }
}
