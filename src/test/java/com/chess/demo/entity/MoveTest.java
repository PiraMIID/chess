package com.chess.demo.entity;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MoveTest {

    Move underTest;

    @BeforeEach
    void setUp() {

    }

    @Test
    void itShouldName() {
        // Given
        int x = 7;
        int y = 3;
        // When
        boolean move = new Move().move(x, y);
        // Then
        assertFalse(move);

    }
}