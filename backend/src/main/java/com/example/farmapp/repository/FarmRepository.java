package com.example.farmapp.repository;

import com.example.farmapp.model.Farm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FarmRepository extends JpaRepository<Farm, Long> {}
