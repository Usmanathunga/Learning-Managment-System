// import { cleanup, render } from "@testing-library/react";
import { CardTitle } from "bootstrap";
import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  Card,
  Alert,
} from "react-bootstrap";
import studentService from "../services/StudentServices";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

import axios from "axios";

const ListStudent = () => {
  const [students, setStudents] = useState([]);

  const loadStudents = () => {
    studentService.then((response) => {
      setStudents(response.data);
      console.log("response", response.data[0]);
      console.log("students", students);
    });
  };





  return (
    <div>
      <MDBContainer>
        <h2 className="text-center">Student Managment System </h2>
      </MDBContainer>

      <Container className="mt-4 ">
        <MDBRow>
          <MDBCol>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>First Name</Form.Label>
                <Form.Control  placeholder="Enter First Name" />
               
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Second Name</Form.Label>
                <Form.Control  placeholder="Enter First Name"/>
              </Form.Group>
              
              
            </Form>
            <Row>
              <Col className="mb-1">
                <Button variant="primary" type="submit" onClick={() => {
                
                }}>
                  Submit
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    loadStudents();
                  }}
                >
                  Show All
                </Button>
              </Col>
            </Row>
          </MDBCol>
          <MDBCol>
          <div>
            {students.map((student) => {
              return (
                <Alert variant="primary">
                  <Alert.Heading>{student.student_name}</Alert.Heading>

                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button onClick={() => {}} variant="outline-success">
                      Delete
                    </Button>
                  </div>
                </Alert>
              );
              console.log("Student", student);
            })}
          </div>
            
          </MDBCol>

          
        </MDBRow>
      </Container>
    </div>
  );
};
export default ListStudent;
