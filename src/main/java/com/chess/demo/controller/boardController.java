package com.chess.demo.controller;


import com.chess.demo.figure.Figure;
import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.sql.Time;
import java.util.Date;
import java.util.Map;

@RestController
public class boardController {

    @PostMapping("{nameRoom}/game")
    public Figure[] initGame(
            @PathVariable("nameRoom")String nameRoom,
            String colorAdminPlayer,
            Time timeOfGame  // todo check best object to timer
    ) {
        return null;
    }

    @PostMapping
    public Figure[] move(String player, Figure figure, int targetX, int targetY) {
        return null;
    }

    @PostMapping
    public Figure[] backMove() {
        return null;
    }


}
