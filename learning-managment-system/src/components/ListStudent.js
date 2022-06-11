// import { cleanup, render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  Alert,
  Navbar,
  Nav,
} from "react-bootstrap";

import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

import axios from "axios";

const ListStudent = () => {
  const [students, setStudents] = useState([]);

  const [studentDetails, setStudentDetails] = useState({
    student_name: "",
    email: "",
    age: "",
  });

  const onValueChange = (e) => {
    setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
  };

  const onSubmitData = async (e) => {
    e.preventDefault();
    console.log("called", studentDetails);
    await axios.post("http://localhost:8080/api/student", studentDetails);

    axios
      .get("http://localhost:8080/api/student")
      .then(function(response) {
        setStudents(response.data);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/api/student/${id}`);
    axios
      .get("http://localhost:8080/api/student")
      .then(function(response) {
        setStudents(response.data);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/student")
      .then(function(response) {
        setStudents(response.data);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Student Managment System</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <MDBContainer>
        <h2 className="text-center"> </h2>
      </MDBContainer> */}

      <Container className="mt-4 ">
        <MDBRow>
          <MDBCol>
            <Form onSubmit={onSubmitData}>
              <Form.Group className="mb-3">
                <Form.Label>Enter the Name</Form.Label>
                <Form.Control
                  placeholder="Name"
                  value={studentDetails.student_name}
                  type="name"
                  required
                  onChange={onValueChange}
                  name="student_name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter the Email</Form.Label>
                <Form.Control
                  placeholder="Email"
                  value={studentDetails.email}
                  type="email"
                  required
                  onChange={onValueChange}
                  name="email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter the Age</Form.Label>
                <Form.Control
                  placeholder="Age"
                  value={studentDetails.age}
                  type="age"
                  onChange={onValueChange}
                  name="age"
                />
              </Form.Group>

              <Row>
                <Col className="mb-1">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </MDBCol>
          <MDBCol>
            <MDBCol>
              <div>
                {students.map((student) => {
                  return (
                    <Alert variant="primary">
                      <Alert.Heading>{student.student_name}</Alert.Heading>

                      <hr />
                      <p>Email: {student.email}</p>
                      <p>Age: {student.age}</p>
                      <div className="d-flex justify-content-end">
                        <Button
                          onClick={() => {
                            deleteStudent(student.id);
                          }}
                          variant="outline-success"
                        >
                          Delete
                        </Button>
                      </div>
                    </Alert>
                  );
                })}
              </div>
              <MDBCol></MDBCol>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </Container>
    </div>
  );
};

export default ListStudent;
