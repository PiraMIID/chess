package com.chess.demo.figure;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class RookTest {

    Rook underTest;

    @BeforeEach
    void setUp() {
        this.underTest = new Rook("white", 1,1);
    }

    @Test
    void itShouldReturnFalseWhenMoveIsNotCu() {
        // Given
        // When
        // Then

    }
}