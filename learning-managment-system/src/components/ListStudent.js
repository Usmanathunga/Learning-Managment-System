// import { cleanup, render } from "@testing-library/react";
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
 
  const [students, setStudents] = useState([])

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/api/student/${id}`)
    axios
    .get('http://localhost:8080/api/student')
      .then(function (response) {
        setStudents(response.data)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/student')
      .then(function (response) {
        setStudents(response.data)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

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
                <Form.Label>Enter the Name</Form.Label>
                <Form.Control  placeholder=" Name" />
               
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
            {/* <Row>
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
            </Row> */}
          </MDBCol>
          <MDBCol>
          <div>
            {students.map((student) => {
              return (
                <Alert variant="primary">
                  <Alert.Heading>{student.student_name}</Alert.Heading>

                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button onClick={() => {
                      deleteStudent(student.id);
                    }} variant="outline-success">
                      Delete
                    </Button>
                  </div>
                </Alert>
              );
              
            })}
          </div>
            
          </MDBCol>

        </MDBRow>
      </Container>
    </div>
  );
};

export default ListStudent;
