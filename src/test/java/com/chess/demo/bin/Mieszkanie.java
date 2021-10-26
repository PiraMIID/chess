package com.chess.demo.bin;

public class Mieszkanie extends Dom {


    @Override
    public int add(int a) {
        if (super.add(a) == 1) return 1;
        return 3;
    }
}
