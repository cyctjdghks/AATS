package com.ssafy.d102.controller;

import com.ssafy.d102.data.Exception.NotMatchException;
import com.ssafy.d102.data.entity.Board;
import com.ssafy.d102.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PostMapping("/board")
    public ResponseEntity<?> createBoard(@Validated @RequestParam("files") List<MultipartFile> files) throws Exception {

        for(MultipartFile m : files){
            if(m.getOriginalFilename().equals(""))
                throw new NotMatchException("파일이 없습니다.");
        }

        boardService.addBoard(Board.builder().build(), files);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/board")
    public String getBoard(@RequestParam long id) {
        Board board = boardService.findBoard(id).orElseThrow(RuntimeException::new);
        String imgPath = board.getStoredFileName();
        log.info(imgPath);
        return "<img src=" + imgPath + ">";
    }

}