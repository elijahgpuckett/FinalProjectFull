package com.tts.ecommerce.db;

import com.tts.ecommerce.model.Book;

import org.springframework.data.jpa.repository.JpaRepository;


public interface BookRepository extends JpaRepository<Book, Long> {
}