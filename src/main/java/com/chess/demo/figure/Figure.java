package com.chess.demo.figure;

public abstract class Figure {
    String player;
    int x;
    int y;
    int lastPositionX;
    int lastPositionY;

    public Figure(String player, int x, int y) {
        this.player = player;
        this.x = x;
        this.y = y;
    }

    /**
     * @return true when move is possible or false when is not
     */
    abstract boolean move(int newX, int newY);

    boolean checkNewPositionIsNotSameAndInRange(Integer newX, Integer newY) {
        return (this.x == newX || newX<1 || newX> 8 || this.y == newY || newY<1 || newY> 8);
    }

    public void backMove(int oldX, int oldY) {
        this.x = oldX;
        this.y = oldY;
    }




}
