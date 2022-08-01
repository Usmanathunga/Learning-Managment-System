package com.lms.Learning.Management.System.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Student")
public class Student {
    @Id
    private  String id;
    private  String student_name;
    private  String email;
    private  String age;

    public String getId() {
        return id;
    }

    public String getStudent_name() {
        return student_name;
    }

    public String getEmail(){return email;}
    public String getAge(){ return age; }


    public void setId(String id) {
        this.id = id;
    }

    public void setStudent_name(String student_name) {
        this.student_name = student_name;
    }

    public void setEmail(String email){this.email = email;}

    public void setAge(String age){this.age = age ;}




}
