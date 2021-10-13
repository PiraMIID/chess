package com.chess.demo.exception;


import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;

//todo check how to do pro
//@ExceptionHandler({HttpClientErrorException.BadRequest.class, ""})
public class BadMoveException extends RuntimeException {
    public BadMoveException(String message, Throwable cause) {
        super(message, cause);
    }
}
