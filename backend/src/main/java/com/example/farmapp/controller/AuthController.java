package com.example.farmapp.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @PostMapping("/login")
  public java.util.Map<String,String> login(@RequestBody java.util.Map<String,String> body){
    // demo stub: always returns a token. Replace with real auth (Spring Security + JWT) for production.
    return java.util.Map.of("token", "demo-token");
  }
}
