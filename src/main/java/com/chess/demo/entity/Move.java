package com.chess.demo.entity;




//@AllArgsConstructor
//@Data
public class Move {
    String player;
    String figure;
    int x;
    int y;

    public Move() {

    }

    public boolean move(int x, int y) {
        return  (1<=x && x<=8) &&  (1<=y && y<=8);
    }
}
