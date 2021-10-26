package com.chess.demo.kafka.service;


import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class Producer {
    public static final String topic = "gametopic";

    private final KafkaTemplate<String, String> kafkaTemplate;

    public Producer(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }


    public void publishToTopic(String message) {
        System.out.println("Publishing massage to topis name : " + topic);
        this.kafkaTemplate.send(topic, message);
    }


}
