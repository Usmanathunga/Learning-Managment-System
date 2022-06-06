import React from 'react'
import { cleanup, render } from '@testing-library/react'
// import { Button } from 'bootstrap'
import {useEffect, useState} from 'react'
import { Row,Col,Container, Button } from 'react-bootstrap'
import studentServices from '../services/StudentServices'

export default function StudentsList() {
  return (
    <Container className='mt-3'>
  <Row>
    <Col sm="12">
      {/* <Button color='primary'>
        <span>Create New Student </span>
        Button
      </Button> */}
      <Button>Button</Button>
      <p>fuck</p>
    </Col>

  </Row>


</Container>
  )
}
