package com.lms.Learning.Management.System.service;
import com.lms.Learning.Management.System.model.Student;
import com.lms.Learning.Management.System.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public void addStudent(Student student){
        studentRepository.insert(student);

    }
    public List<Student> getAllStudent(){
        return studentRepository.findAll();

    }
    public void deleteStudent(String id){
        studentRepository.deleteById(id);

    }

}
