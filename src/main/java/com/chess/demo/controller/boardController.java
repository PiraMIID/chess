package com.chess.demo.controller;


import com.chess.demo.kafka.service.Consumer;
import com.chess.demo.kafka.service.Producer;

import org.apache.kafka.clients.admin.NewTopic;
import org.apache.kafka.common.message.VoteResponseData;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("")
public class boardController {


    Producer producer;
    Consumer consumer;
    NewTopic newTopic;

    public boardController(
            NewTopic newTopic,
            Producer producer,
            Consumer consumer
    ) {
        this.newTopic = newTopic;
        this.producer = producer;
        this.consumer = consumer;
    }
//
//    @PostMapping("{nameRoom}/game")
//    public Figure[] initGame(
//            @PathVariable("nameRoom")String nameRoom,
//            String colorAdminPlayer,
//            Time timeOfGame  // todo check best object to timer
//    ) {
//        return null;
//    }
//
//    @PostMapping
//    public Figure[] move(String player, Figure figure, int targetX, int targetY) {
//        return null;
//    }
//
//    @PostMapping
//    public Figure[] backMove() {
//        return null;
//    }

    @PostMapping("/post/{message}")
    public boolean sendMessage(@PathVariable("message")
                                        String msg) {
        producer.publishToTopic(msg);
        return true;
    }

    @GetMapping("/post")
    public Consumer showGame() {
        return this.consumer;
    }

    @GetMapping("/val")
    public NewTopic showValueOfGame() {
        return this.newTopic;
    }

}
