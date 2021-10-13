package com.chess.demo.figure;

public class Rook extends Figure {

    public Rook(String player, int x, int y) {
        super(player, x, y);
    }

    @Override
    boolean move(int newX, int newY) {
        if (x != newX && this.y != newY) return false;
        return checkNewPositionIsNotSameAndInRange(newX, newY);
    }

}
