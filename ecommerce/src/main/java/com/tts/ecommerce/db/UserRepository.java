package com.tts.ecommerce.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tts.ecommerce.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}