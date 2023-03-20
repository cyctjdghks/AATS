package com.ssafy.d102.controller;

import com.ssafy.d102.data.Exception.NoContentException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class RestControllerAdvice {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleAllUncaughtException(Exception e){
        Map<String, Object> data = new HashMap<>();

        data.put("msg", "fail");

        return new ResponseEntity<>(data, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(NoContentException.class)
    public ResponseEntity<?> handleNoContentException(NoContentException e){
        Map<String, Object> data = new HashMap<>();

        data.put("msg", "fail");
        data.put("error", e.toString());

        return new ResponseEntity<>(data, HttpStatus.NO_CONTENT);

    }
}
