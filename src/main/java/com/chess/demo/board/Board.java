package com.chess.demo.board;

import java.util.Arrays;

public class Board {
    int[][] gameBoard;

    public Board() {
        this.gameBoard = createNewGameBoard();
    }

    private int[][] createNewGameBoard() {
        System.out.println(Arrays.stream(new int[8][8]));
        return null;
    }
}
