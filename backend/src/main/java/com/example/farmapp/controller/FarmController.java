package com.example.farmapp.controller;

import com.example.farmapp.model.Farm;
import com.example.farmapp.repository.FarmRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/farms")
public class FarmController {
  private final FarmRepository repo;
  public FarmController(FarmRepository repo){ this.repo = repo; }

  @GetMapping
  public List<Farm> all(){ return repo.findAll(); }

  @PostMapping
  public Farm create(@RequestBody Farm farm){ return repo.save(farm); }
}
