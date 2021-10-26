package com.chess.demo.board;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class BoardTest {

    Board underTest;

//    @BeforeEach
//    void setUp() {
//        this.underTest = new Board();
//    }

    @Test
    void itShouldCreateMatrixToGame() {
        // Given
        assertEquals(8, this.underTest.gameBoard.length);
        assertEquals(8, this.underTest.gameBoard[0].length);
        // When
        // Then

    }

    @Test
    void itShouldName() {
//
        System.out.println(Arrays.stream(new int[8][8]).count());
        System.out.println("a");

        int[][] ints = new int[8][8];

        ints[1][1] = 3;

        System.out.println(ints[0][0]);
        System.out.println(ints[1][1]);



    }
}