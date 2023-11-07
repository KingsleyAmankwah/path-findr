package com.example.pathfindr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.pathfindr.model.Mentor;
import com.example.pathfindr.model.Student;
import com.example.pathfindr.repository.RoleRepository;
import com.example.pathfindr.repository.StudentRepository;
import com.example.pathfindr.service.mentorService.MentorService;
import com.example.pathfindr.service.studentService.StudentService;

@RestController
public class MainController {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    StudentService studentService;

    @Autowired
    MentorService mentorService;

    @PostMapping("/signUpStudent")
    public ResponseEntity<String> addNewUser(@RequestBody Student student) {
        try {
            studentService.saveStudent(student);
            return ResponseEntity.ok("Student added successfully");
        }

        catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @PostMapping("/mentorApplication")
    public ResponseEntity<String> addNewMentor(@RequestBody Mentor mentor) {
        try {
            mentorService.saveMentor(mentor);
            return ResponseEntity.ok("Mentor added successfully");

        }

        catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

}
