import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function BookSession() {
  const [formData, setFormData] = useState({
    matchName: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Session booked:", formData);
    alert(`Session booked with ${formData.matchName}`);
    setFormData({ matchName: '', date: '', time: '', notes: '' });
  };

  return (
    <Container className="mt-5">
      <h2>Book a Session</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Match Name</Form.Label>
          <Form.Control
            type="text"
            name="matchName"
            value={formData.matchName}
            onChange={handleChange}
            placeholder="Enter match name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Add any details for the session"
          />
        </Form.Group>

        <Button type="submit" variant="primary">Book Session</Button>
      </Form>
    </Container>
  );
}

export default BookSession;
