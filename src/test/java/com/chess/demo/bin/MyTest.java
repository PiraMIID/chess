package com.chess.demo.bin;


import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class MyTest {

    @Test
    void itShouldWorkXd() {
        // Given
        Mieszkanie mieszkanie = new Mieszkanie();
        // When
        int c=3;
        assertThat(mieszkanie.add(0)).isEqualTo(3);
        assertThat(mieszkanie.add(1)).isEqualTo(1);
//        assertThat(mieszkanie.add(32)).isEqualTo(11);
//        assertThat(mieszkanie.add(33)).isEqualTo(3);
        // Then

    }
}
