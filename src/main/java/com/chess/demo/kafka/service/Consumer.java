package com.chess.demo.kafka.service;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.listener.MessageListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.stereotype.Service;

@Service
public class Consumer implements MessageListener<String, String> {

    Object data;

    @KafkaListener(topics = "gametopic", groupId = "gamegroup")
    public void consumeFromTopic(String message) {
        System.out.println(this.data);
        System.out.println("consummed message :" + message);
    }

    @Override
    public void onMessage(ConsumerRecord<String, String> data) {
        this.data = data;
    }

    @Override
    public void onMessage(ConsumerRecord<String, String> data, Acknowledgment acknowledgment) {
        MessageListener.super.onMessage(data, acknowledgment);
    }

    @Override
    public void onMessage(ConsumerRecord<String, String> data, org.apache.kafka.clients.consumer.Consumer<?, ?> consumer) {
        MessageListener.super.onMessage(data, consumer);
    }

    @Override
    public void onMessage(ConsumerRecord<String, String> data, Acknowledgment acknowledgment, org.apache.kafka.clients.consumer.Consumer<?, ?> consumer) {
        MessageListener.super.onMessage(data, acknowledgment, consumer);
    }
}
