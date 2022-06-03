package com.lms.Learning.Management.System.repository;

import com.lms.Learning.Management.System.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student ,String> {



}
