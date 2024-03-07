import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



const EventForm = () => {
    return (
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Event Title</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Event Date</Form.Label>
            <Form.Control type="date" placeholder="12/12/2024" />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Location</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Other location indicators" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Description" />
        </Form.Group>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default EventForm;