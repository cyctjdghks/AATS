package com.ssafy.d102.service;

import com.ssafy.d102.data.entity.Board;
import com.ssafy.d102.repository.BoardRepository;
import com.ssafy.d102.structure.File.FileHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    private final BoardRepository boardRepository;

    private final FileHandler fileHandler;

    @Autowired
    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
        this.fileHandler = new FileHandler();
    }

    public void addBoard(Board board, List<MultipartFile> files) throws Exception {
        // 파일을 저장하고 그 Board 에 대한 list 를 가지고 있는다
        List<Board> list = fileHandler.parseFileInfo(board.getId(), files);

        // 파일에 대해 DB에 저장하고 가지고 있을 것
            List<Board> pictureBeans = new ArrayList<>();
            for (Board boards : list) {
                pictureBeans.add(boardRepository.save(boards));
            }

    }

    public List<Board> findBoards() {
        return boardRepository.findAll();
    }

    public Optional<Board> findBoard(Long id) {
        return boardRepository.findById(id);
    }

}