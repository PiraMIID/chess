package com.chess.demo.entity;


import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Move {
    int x;
    int y;

    public Move() {

    }

    public boolean move(int x, int y) {
        return  (1<=x && x<=8) &&  (1<=y && y<=8);
    }
}
